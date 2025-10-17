from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Invento"
    google_credentials: str

    class Config:
        env_file = ".env"

settings = Settings()