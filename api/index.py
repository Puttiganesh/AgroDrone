import os
import sys

BACKEND_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "agroDrone", "backend"))
if BACKEND_DIR in sys.path:
    sys.path.remove(BACKEND_DIR)
sys.path.insert(0, BACKEND_DIR)

from main import app
