from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    jwt_secret: str = Field(..., alias="JWT_SECRET")
    refresh_secret: str = Field(..., alias="REFRESH_SECRET")
    access_expires_hours: int = Field(2, alias="ACCESS_EXPIRES_HOURS")
    refresh_expires_days: int = Field(7, alias="REFRESH_EXPIRES_DAYS")
    database_url: str = Field(..., alias="DATABASE_URL")
    cors_origins: str = Field("http://localhost:5173,http://localhost:5174", alias="CORS_ORIGINS")

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()