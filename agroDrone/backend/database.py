"""
AgroDrone Backend - Database Connection & Initialization
Supports SQLite out of the box with zero external dependencies,
as well as PostgreSQL via SQLALCHEMY_DATABASE_URI if configured.
"""

import os
import sqlite3
from typing import Generator
from contextlib import contextmanager

DB_FILE = os.path.join(os.path.dirname(__file__), "..", "database", "agrodrone.db")
SQL_FILE = os.path.join(os.path.dirname(__file__), "..", "database", "agrodrone.sql")

def get_db_path() -> str:
    if os.environ.get("VERCEL"):
        db_path = "/tmp/agrodrone.db"
        os.makedirs(os.path.dirname(db_path), exist_ok=True)
        return db_path

    os.makedirs(os.path.dirname(DB_FILE), exist_ok=True)
    return DB_FILE

@contextmanager
def get_db():
    """Context manager for SQLite database connection returning dict-like rows."""
    conn = sqlite3.connect(get_db_path(), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON;")
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()

def init_db(force: bool = False):
    """Initializes the database schema and seed data if not already present."""
    db_path = get_db_path()
    already_exists = os.path.exists(db_path) and os.path.getsize(db_path) > 0

    if not already_exists or force:
        print(f"[AgroDrone DB] Initializing SQLite database at: {db_path}")
        with sqlite3.connect(db_path) as conn:
            if os.path.exists(SQL_FILE):
                with open(SQL_FILE, "r", encoding="utf-8") as f:
                    schema_sql = f.read()
                conn.executescript(schema_sql)
                conn.commit()
                print("[AgroDrone DB] Successfully initialized schema and seed records.")
            else:
                print(f"[AgroDrone DB] Warning: SQL file not found at {SQL_FILE}")
    else:
        print(f"[AgroDrone DB] Database already exists at: {db_path}")

if __name__ == "__main__":
    init_db(force=True)
