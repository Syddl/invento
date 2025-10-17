import os
from google.cloud import firestore
from app.core.config import settings

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = settings.google_credentials

db = firestore.Client()