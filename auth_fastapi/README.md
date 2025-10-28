# Auth Service (FastAPI)

JWT auth with PostgreSQL, access + refresh tokens, and basic logging middleware.

## Run with Docker

```powershell
docker compose up -d db auth
```

- Auth API: http://localhost:8000
- Health: http://localhost:8000/health

## Environment

Create an `.env` file (or set env via docker-compose) in `auth_fastapi/` based on `.env.example`:

```
JWT_SECRET=change_me_in_prod
REFRESH_SECRET=another_change_me_secret
ACCESS_EXPIRES_HOURS=2
REFRESH_EXPIRES_DAYS=7
DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/utopiahire
CORS_ORIGINS=http://localhost:5173,http://localhost:5174
```

## Endpoints

- POST /api/auth/register { name, email, password }
- POST /api/auth/login { email, password }
- GET  /api/auth/me (Authorization: Bearer <access token>)
- POST /api/auth/refresh { refreshToken }

Responses mirror the existing Node service with the addition of `refreshToken`.

## Tokens

- Access token (HS256) expires in `ACCESS_EXPIRES_HOURS` (default 2 hours).
- Refresh token (HS256) expires in `REFRESH_EXPIRES_DAYS` (default 7 days) and is rotated on each refresh.

## Logging Middleware

Logs each request method, path, status and duration to stdout, e.g.:
```
POST /api/auth/login -> 200 (5.1 ms)
```

## Notes

- On startup, the service creates tables if missing and ensures `token_version` exists.
- Keep `JWT_SECRET` and `REFRESH_SECRET` strong in production.
