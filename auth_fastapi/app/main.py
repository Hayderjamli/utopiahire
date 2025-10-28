from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from sqlalchemy.ext.asyncio import AsyncEngine
from sqlalchemy import text
from .config import settings
from .db import Base, engine
from .routers import router as auth_router
from .middleware import logging_middleware

app = FastAPI(title="Auth Service ")

# Custom validation error handler
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    print(f"Validation error: {exc.errors()}")
    print(f"Request body: {await request.body()}")
    errors = exc.errors()
    first_error = errors[0] if errors else {}
    field = first_error.get('loc', ['unknown'])[-1]
    msg = first_error.get('msg', 'Invalid input')
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={"detail": f"Invalid {field}: {msg}"}
    )

# CORS
origins = [o.strip() for o in settings.cors_origins.split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging middleware
app.middleware("http")(logging_middleware)

@app.on_event("startup")
async def on_startup():
    # Create tables if not exist
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
        # Ensure token_version column exists (simple migration)
        try:
            await conn.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS token_version integer NOT NULL DEFAULT 0"))
        except Exception:
            pass

@app.get("/health")
async def health():
    try:
        async with engine.connect() as conn:
            await conn.execute(text("SELECT 1"))
        return {"status": "ok", "db": "up"}
    except Exception:
        return {"status": "degraded", "db": "down"}

# Routes
app.include_router(auth_router)
