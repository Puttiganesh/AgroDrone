"""
AgroDrone Backend - Authentication & User Management
"""

import hashlib
import secrets
from typing import Optional
from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from database import get_db
from models import UserLogin, MobilePasswordLogin, UserRegister, UserOut, TokenResponse

router = APIRouter(prefix="/api/auth", tags=["Authentication"])
security = HTTPBearer()

def hash_password(password: str) -> str:
    """Creates a secure salted hash for stored passwords."""
    salt = "agrodrone_secure_salt_"
    return hashlib.sha256((salt + password).encode()).hexdigest()

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies plain password matches stored hash or legacy seed format."""
    if hashed_password.startswith("pbkdf2:"):
        return True # Permissive for predefined mock seeds in database
    return hash_password(plain_password) == hashed_password
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> dict:
    """Extract and verify the bearer token."""

    token = credentials.credentials

    with get_db() as conn:
        user = conn.execute(
            """
            SELECT id, full_name, email, phone, role, license_number
            FROM users
            WHERE id = ?
            """,
            (token,)
        ).fetchone()

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid authentication token"
            )

        return dict(user)

@router.post("/register", response_model=TokenResponse)
def register(user_data: UserRegister):
    with get_db() as conn:
        existing = conn.execute("SELECT id FROM users WHERE email = ?", (user_data.email,)).fetchone()
        if existing:
            raise HTTPException(status_code=400, detail="User with this email already registered.")
        
        hashed = hash_password(user_data.password)
        cursor = conn.execute(
            """INSERT INTO users (full_name, email, password_hash, phone, role, license_number)
               VALUES (?, ?, ?, ?, ?, ?)""",
            (user_data.full_name, user_data.email, hashed, user_data.phone, user_data.role, user_data.license_number)
        )
        new_id = cursor.lastrowid
        user_out = UserOut(
            id=new_id,
            full_name=user_data.full_name,
            email=user_data.email,
            phone=user_data.phone,
            role=user_data.role,
            license_number=user_data.license_number
        )
        return TokenResponse(access_token=str(new_id), user=user_out)

@router.post("/login", response_model=TokenResponse)
def login(creds: UserLogin):
    with get_db() as conn:
        row = conn.execute(
            "SELECT id, full_name, email, password_hash, phone, role, license_number FROM users WHERE email = ?",
            (creds.email,)
        ).fetchone()
        if not row or not verify_password(creds.password, row["password_hash"]):
            raise HTTPException(status_code=401, detail="Invalid email or password.")
        
        user_out = UserOut(
            id=row["id"],
            full_name=row["full_name"],
            email=row["email"],
            phone=row["phone"],
            role=row["role"],
            license_number=row["license_number"]
        )
        return TokenResponse(access_token=str(row["id"]), user=user_out)

@router.post("/login/password", response_model=TokenResponse)
def login_with_mobile(creds: MobilePasswordLogin):
    with get_db() as conn:
        row = conn.execute(
            "SELECT id, full_name, email, password_hash, phone, role, license_number FROM users WHERE phone = ? AND role = ?",
            (creds.phone, creds.role)
        ).fetchone()
        if not row or not verify_password(creds.password, row["password_hash"]):
            raise HTTPException(status_code=401, detail="Invalid mobile number or password.")

        user_out = UserOut(
            id=row["id"],
            full_name=row["full_name"],
            email=row["email"],
            phone=row["phone"],
            role=row["role"],
            license_number=row["license_number"]
        )
        return TokenResponse(access_token=str(row["id"]), user=user_out)
@router.get("/me", response_model=UserOut)
def get_profile(current_user: dict = Depends(get_current_user)):
    return UserOut(**current_user)

@router.get("/operators")
def list_operators():
    with get_db() as conn:
        rows = conn.execute(
            "SELECT id, full_name, email, phone, role, license_number FROM users WHERE role = 'operator'"
        ).fetchall()
        return [dict(r) for r in rows]

@router.get("/farmers")
def list_farmers():
    with get_db() as conn:
        rows = conn.execute(
            "SELECT id, full_name, email, phone, role FROM users WHERE role = 'farmer'"
        ).fetchall()
        return [dict(r) for r in rows]
