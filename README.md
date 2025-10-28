# UtopiaHire - AI-Powered Career Platform# UtopiaHire



A modern full-stack web application that helps job seekers with CV optimization, interview preparation, and job matching through AI-powered tools.Folder structure:

- frontend/      — React + Vite app (pages, components, auth client)

## 🚀 Features- auth_fastapi/  — FastAPI auth (recommended) with access + refresh tokens



- **Authentication System**: Secure JWT-based authentication with access tokens (2h) and refresh tokens (7d)Quick start (PowerShell):

- **CV Tools**: AI-powered CV analysis and optimization (coming soon)

- **AI Interview Practice**: Real-time AI interview simulation (coming soon)```powershell

- **Job Matcher**: Intelligent job matching based on skills and experience (coming soon)# Option A) Run Auth via Docker (FastAPI)

- **Modern UI**: Responsive design with Tailwind CSS and smooth animationscd "c:/Users/Hayder Jamli/Desktop/cs challenge 2810"

docker compose up -d db auth

## 🏗️ Tech Stack

# Option B) Run legacy Node auth (not needed if using FastAPI)

### Frontendcd "c:/Users/Hayder Jamli/Desktop/cs challenge 2810/auth"

- **React 18** - Modern UI librarynpm install

- **React Router v6** - Client-side routingnpm run start

- **Vite** - Fast build tool and dev server

- **Tailwind CSS** - Utility-first CSS framework# 2) Start frontend

- **Axios** - HTTP client with interceptors for token refreshcd "c:/Users/Hayder Jamli/Desktop/cs challenge 2810/frontend"

npm install

### Backendnpm run dev

- **FastAPI** - High-performance Python web framework```

- **PostgreSQL 15** - Robust relational database

- **SQLAlchemy 2.0** - Async ORMOpen the frontend dev server URL shown by Vite (usually http://localhost:5173) and you'll be able to register/login and access the Dashboard. The frontend expects the auth API at http://localhost:8000/api.

- **JWT (python-jose)** - Token-based authentication

- **Bcrypt (passlib)** - Secure password hashingNotes:

- **Pydantic v2** - Data validation with email validation- This is a frontend-focused clone for demo and learning only. Prefer the FastAPI auth (`auth_fastapi`) which uses PostgreSQL and refresh tokens.

- The legacy in-memory Node auth has been upgraded previously to PostgreSQL; now superseded by FastAPI.

### Infrastructure- The UI is intentionally minimal; more styling and components can be added to match the original site more closely.

- **Docker & Docker Compose** - Containerization and orchestration

- **Uvicorn** - ASGI server for FastAPINext steps I will take (unless you tell me otherwise):

- Finish wiring frontend auth flows and test end-to-end (login/register -> protected dashboard)

## 📋 Prerequisites- Improve UI and add more pages/components to match the original site

- Add unit tests and a small smoke test to verify both servers run

Before you begin, ensure you have the following installed on your machine:

- **Docker Desktop** (version 20.10 or higher)
  - Download: https://www.docker.com/products/docker-desktop
  - Verify: `docker --version` and `docker compose version`
- **Node.js** (version 18 or higher) and **npm**
  - Download: https://nodejs.org/
  - Verify: `node --version` and `npm --version`
- **Git** (for cloning the repository)
  - Download: https://git-scm.com/
  - Verify: `git --version`

## 🛠️ Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/Hayderjamli/utopiahire.git
cd utopiahire
```

### Step 2: Configure Environment Variables

Create environment file for the auth service:

```bash
# Copy the example environment file
cp auth_fastapi/.env.example auth_fastapi/.env
```

**Edit `auth_fastapi/.env`** and update the secrets (IMPORTANT for production):

```bash
# IMPORTANT: Change these secrets in production!
JWT_SECRET=your_super_secure_random_string_here
REFRESH_SECRET=another_different_secure_random_string

# Token expiration settings
ACCESS_EXPIRES_HOURS=2
REFRESH_EXPIRES_DAYS=7

# Database connection (don't change for Docker setup)
DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/utopiahire

# Allowed frontend origins
CORS_ORIGINS=http://localhost:5173,http://localhost:5174
```

> **Security Note**: Generate strong random secrets using:
> - Online: https://randomkeygen.com/
> - Command line: `openssl rand -hex 32`

### Step 3: Start the Backend Services

Start the database and auth service using Docker:

```bash
# Build and start all services
docker compose up -d --build

# Check if services are running
docker compose ps

# View logs (optional)
docker compose logs -f auth
```

**Expected output:**
```
✅ utopiahire-postgres  - Started (healthy)
✅ utopiahire-auth-fastapi - Started
```

**Verify backend is working:**
- Health check: http://localhost:8000/health
- Should return: `{"status":"ok","db":"up"}`

### Step 4: Install and Start Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

**Expected output:**
```
  VITE ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 5: Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs (FastAPI Swagger UI)

## 🎯 Using the Application

### Register a New Account

1. Click **"Get Started"** button on the homepage
2. In the modal, click **"Don't have an account? Sign up"**
3. Fill in the registration form:
   - **Name**: Your full name
   - **Email**: Valid email address
   - **Password**: Must meet requirements:
     - At least 8 characters
     - Contains lowercase letters (a-z)
     - Contains uppercase letters (A-Z)
     - Contains numbers (0-9)
     - Contains special characters (!@#$%^&*)
   - Example: `Strong@Pass123`
4. Click **"Register"**

### Login

1. Click **"Get Started"** button
2. Enter your email and password
3. Click **"Sign In"**

### Authentication Features

- **Automatic token refresh**: Access tokens expire after 2 hours and are automatically refreshed
- **Persistent sessions**: Tokens stored in localStorage, so you stay logged in across browser sessions
- **Secure logout**: Clears all tokens and redirects to home

## 🐳 Docker Commands

### Managing Services

```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# Rebuild specific service (e.g., after code changes)
docker compose build --no-cache auth
docker compose up -d auth

# View logs
docker compose logs -f auth        # Follow auth service logs
docker compose logs -f db          # Follow database logs
docker compose logs --tail=100 auth  # Last 100 lines

# Restart a service
docker compose restart auth

# Stop services but keep data
docker compose stop

# Stop and remove everything including volumes (WARNING: deletes database!)
docker compose down -v
```

### Database Management

```bash
# Connect to PostgreSQL database
docker exec -it utopiahire-postgres psql -U postgres -d utopiahire

# Common SQL commands:
# List all users:
SELECT * FROM users;

# Check user count:
SELECT COUNT(*) FROM users;

# Exit psql:
\q
```

## 🧪 Testing the API

### Using cURL (Linux/Mac)

```bash
# Health check
curl http://localhost:8000/health

# Register a new user
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"Strong@Pass123"}'

# Login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"Strong@Pass123"}'

# Get current user (replace YOUR_TOKEN with actual token)
curl http://localhost:8000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Using PowerShell (Windows)

```powershell
# Health check
Invoke-WebRequest -Uri "http://localhost:8000/health" | Select-Object -ExpandProperty Content

# Register a new user
$body = '{"name":"John Doe","email":"john@example.com","password":"Strong@Pass123"}'
Invoke-WebRequest -Uri "http://localhost:8000/api/auth/register" -Method POST -Body $body -ContentType "application/json" | Select-Object -ExpandProperty Content

# Login
$body = '{"email":"john@example.com","password":"Strong@Pass123"}'
$response = Invoke-WebRequest -Uri "http://localhost:8000/api/auth/login" -Method POST -Body $body -ContentType "application/json"
$response.Content
```

## 📁 Project Structure

```
utopiahire/
├── auth_fastapi/              # FastAPI authentication service
│   ├── app/
│   │   ├── main.py           # FastAPI app entry point
│   │   ├── routers.py        # Auth endpoints (register, login, /me, refresh)
│   │   ├── security.py       # JWT, password hashing, auth dependencies
│   │   ├── models.py         # SQLAlchemy User model
│   │   ├── schemas.py        # Pydantic request/response models
│   │   ├── db.py             # Database connection and session
│   │   ├── config.py         # Environment settings (JWT secrets, etc.)
│   │   └── middleware.py     # Request logging middleware
│   ├── Dockerfile            # Docker image for auth service
│   ├── requirements.txt      # Python dependencies
│   └── .env.example          # Example environment variables
├── frontend/                  # React + Vite frontend
│   ├── src/
│   │   ├── main.jsx          # React entry point
│   │   ├── App.jsx           # Main app component with routing
│   │   ├── AuthContext.jsx   # Auth state management
│   │   ├── ServiceContext.jsx # Interview/CV service state
│   │   ├── api.js            # Axios instance with token refresh
│   │   ├── components/
│   │   │   ├── AuthModal.jsx     # Login/Register modal
│   │   │   ├── Nav.jsx           # Navigation bar
│   │   │   ├── Footer.jsx        # Footer component
│   │   │   └── ProtectedRoute.jsx # Route guard for auth
│   │   └── pages/
│   │       ├── Home.jsx          # Landing page
│   │       ├── Dashboard.jsx     # User dashboard
│   │       ├── CVTool.jsx        # CV optimization tool
│   │       ├── Interview.jsx     # AI interview practice
│   │       ├── InterviewerSetup.jsx # Interview configuration
│   │       ├── JobMatcher.jsx    # Job matching tool
│   │       ├── About.jsx         # About page
│   │       └── Pricing.jsx       # Pricing page
│   ├── package.json          # Node.js dependencies
│   ├── vite.config.js        # Vite configuration
│   └── tailwind.config.js    # Tailwind CSS configuration
├── docker-compose.yml         # Docker services orchestration
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🔧 Development

### Frontend Development

```bash
cd frontend

# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Development

For local development without Docker:

```bash
cd auth_fastapi

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run with auto-reload (requires local PostgreSQL)
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Note**: You'll need to update `DATABASE_URL` in `.env` to point to your local PostgreSQL instance.

## 🐛 Troubleshooting

### Common Issues

#### 1. Docker services won't start

**Problem**: `docker compose up` fails or services crash

**Solutions**:
```bash
# Check if ports are already in use
# Windows:
netstat -ano | findstr :8000
netstat -ano | findstr :5432

# Stop any conflicting services, then:
docker compose down
docker compose up -d --build
```

#### 2. "Email already registered" error

**Problem**: Testing registration with same email

**Solution**:
```bash
# Option 1: Use a different email
# Option 2: Clear the database
docker compose down -v  # WARNING: Deletes all data!
docker compose up -d
```

#### 3. "Auth failed" or 500 errors

**Problem**: Backend not responding properly

**Solutions**:
```bash
# Check logs for errors
docker compose logs auth --tail=50

# Rebuild without cache
docker compose build --no-cache auth
docker compose up -d auth

# Verify environment variables
cat auth_fastapi/.env
```

#### 4. Frontend can't connect to backend

**Problem**: Network errors, CORS issues

**Solutions**:
- Verify backend is running: http://localhost:8000/health
- Check CORS_ORIGINS in `auth_fastapi/.env` includes your frontend URL
- Clear browser cache and localStorage
- Check browser console for specific errors

#### 5. Docker "no space left on device"

**Problem**: Docker taking up too much space

**Solutions**:
```bash
# Clean up unused Docker resources
docker system prune -a
docker volume prune
```

#### 6. Password validation failing

**Problem**: "Password must be at least 8 characters..."

**Solution**: Ensure password meets ALL requirements:
- Minimum 8 characters
- At least one lowercase letter (a-z)
- At least one uppercase letter (A-Z)
- At least one number (0-9)
- At least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)

Example valid passwords: `Strong@Pass123`, `MyP@ssw0rd`, `Test#User456`

#### 7. Token expired errors

**Problem**: 401 Unauthorized after some time

**Solution**: This is normal behavior. Access tokens expire after 2 hours. The app should automatically refresh them. If issues persist:
- Logout and login again
- Clear localStorage: `localStorage.clear()`
- Check browser console for refresh token errors

## 🔐 Security Notes

### For Development

- Default credentials are fine for local development
- JWT secrets in `.env.example` are placeholders

### For Production

**CRITICAL**: Before deploying to production:

1. **Change all secrets**:
   ```bash
   JWT_SECRET=<generate-strong-random-string>
   REFRESH_SECRET=<generate-different-random-string>
   ```

2. **Use environment variables** (don't commit `.env` file):
   - Use your hosting platform's environment variable management
   - Examples: Heroku Config Vars, AWS Parameter Store, Azure Key Vault

3. **Update database credentials**:
   - Change PostgreSQL password from default `postgres`
   - Use managed database service (AWS RDS, DigitalOcean Managed DB, etc.)

4. **Enable HTTPS**:
   - Use SSL/TLS certificates
   - Update CORS_ORIGINS to use `https://` URLs

5. **Additional security measures**:
   - Enable rate limiting on auth endpoints
   - Add email verification
   - Implement 2FA (optional)
   - Use secure session storage
   - Regular security updates

## 🚀 Deployment

### Backend (FastAPI)

**Recommended platforms**:
- Railway.app (Docker support)
- Render.com (Docker support)
- Fly.io (Docker support)
- AWS ECS/Fargate
- DigitalOcean App Platform

**Steps** (example for Railway):
1. Push code to GitHub
2. Connect Railway to your repository
3. Set environment variables in Railway dashboard
4. Railway auto-deploys on push

### Frontend (React)

**Recommended platforms**:
- Vercel (automatic deployment)
- Netlify (automatic deployment)
- GitHub Pages
- AWS S3 + CloudFront

**Steps** (example for Vercel):
1. Run `npm run build` to create production build
2. Connect Vercel to your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Update frontend API URL to point to deployed backend

## 📝 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/health` | Health check | No |
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |
| POST | `/api/auth/refresh` | Refresh access token | No (refresh token) |

### Request/Response Examples

**Register**:
```json
// Request
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Strong@Pass123"
}

// Response (200 OK)
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Login**:
```json
// Request
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "Strong@Pass123"
}

// Response (200 OK)
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Get Current User**:
```json
// Request
GET /api/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Response (200 OK)
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- Your Name - [@yourhandle](https://github.com/yourhandle)
- Partner 1 - [@partner1](https://github.com/partner1)
- Partner 2 - [@partner2](https://github.com/partner2)

## 🙏 Acknowledgments

- FastAPI documentation
- React and Vite communities
- Docker documentation
- All open-source contributors

---

Made with ❤️ by the UtopiaHire Team
