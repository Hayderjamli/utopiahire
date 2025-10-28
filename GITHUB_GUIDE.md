# GitHub Push Guide - Step by Step

## 🎯 Pre-Push Checklist

Before pushing to GitHub, ensure you've completed these steps:

### ✅ 1. Verify .gitignore is in place
- [x] `.gitignore` file created in project root
- [x] Excludes: `node_modules/`, `.env`, `__pycache__/`, `venv/`, etc.

### ✅ 2. Protect sensitive data
- [x] `.env` files are NOT committed (only `.env.example`)
- [x] No API keys, passwords, or secrets in code
- [x] Database credentials use environment variables

### ✅ 3. Documentation ready
- [x] Comprehensive README.md created
- [x] Setup instructions included
- [x] Troubleshooting guide added

---

## 📦 Step-by-Step: Push to GitHub

### Step 1: Initialize Git Repository (if not already done)

Open PowerShell in your project root directory:

```powershell
cd "c:\Users\Hayder Jamli\Desktop\cs challenge 2810"

# Initialize git repository
git init

# Check git status
git status
```

### Step 2: Review Files to be Committed

```powershell
# See what will be staged
git status

# Make sure .env files are NOT listed (should be ignored)
# If you see .env files, add them to .gitignore NOW!
```

**⚠️ CRITICAL**: If you see any `.env` files in `git status`, do NOT proceed! They should be in `.gitignore`.

### Step 3: Stage All Files

```powershell
# Add all files to staging area
git add .

# Verify what's staged
git status

# You should see:
# - All source code files (green)
# - .env.example files (green)
# - .gitignore (green)
# - NOT .env files (should not appear at all)
```

### Step 4: Create First Commit

```powershell
# Commit with a descriptive message
git commit -m "Initial commit: FastAPI auth + React frontend with JWT authentication"

# Verify commit was created
git log --oneline
```

### Step 5: Create GitHub Repository

1. Go to https://github.com/
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in repository details:
   - **Repository name**: `utopiahire` (or your preferred name)
   - **Description**: "AI-Powered Career Platform with CV tools, interview practice, and job matching"
   - **Visibility**: 
     - Choose **Private** if you want to keep it private
     - Choose **Public** if you want it to be open source
   - **DO NOT** initialize with README (we already have one)
   - **DO NOT** add .gitignore (we already have one)
   - **DO NOT** choose a license yet (add later if needed)
4. Click **"Create repository"**

### Step 6: Connect Local Repository to GitHub

GitHub will show you commands. Use these in PowerShell:

```powershell
# Add GitHub as remote origin (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/utopiahire.git

# Verify remote was added
git remote -v

# You should see:
# origin  https://github.com/YOUR_USERNAME/utopiahire.git (fetch)
# origin  https://github.com/YOUR_USERNAME/utopiahire.git (push)
```

### Step 7: Push to GitHub

```powershell
# Push to main branch (or master, depending on your default)
git branch -M main

# Push all commits to GitHub
git push -u origin main
```

**If prompted for credentials:**
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (NOT your password!)
  - Generate token: https://github.com/settings/tokens
  - Select scope: `repo` (full control of private repositories)
  - Copy token and paste as password

### Step 8: Verify Push Success

1. Refresh your GitHub repository page
2. You should see:
   - All your files and folders
   - README.md displayed on the main page
   - Last commit message visible
3. Check that `.env` files are **NOT** visible (only `.env.example`)

---

## 👥 Inviting Team Members (Partners)

### Step 1: Add Collaborators

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Collaborators"** in left sidebar (under "Access")
4. Click **"Add people"**
5. Enter your partner's GitHub username or email
6. Select their permission level:
   - **Write**: Can push/pull but can't change settings (recommended)
   - **Admin**: Full access including settings
7. Click **"Add [username] to this repository"**
8. Repeat for each partner

### Step 2: Partners Clone Repository

Your partners should run:

```powershell
# Clone the repository (replace URL with your actual repo)
git clone https://github.com/YOUR_USERNAME/utopiahire.git

# Navigate into project
cd utopiahire

# Copy environment variables file
cp auth_fastapi/.env.example auth_fastapi/.env

# Edit .env with their own secrets (optional for dev)
# notepad auth_fastapi/.env

# Start the application
docker compose up -d --build

# In another terminal, start frontend
cd frontend
npm install
npm run dev
```

---

## 🔄 Daily Workflow for Team

### Before Starting Work

```powershell
# Pull latest changes from GitHub
git pull origin main

# Check what changed
git log --oneline -5
```

### After Making Changes

```powershell
# Check what files you modified
git status

# See detailed changes
git diff

# Stage your changes
git add .

# Or stage specific files
git add frontend/src/components/MyComponent.jsx

# Commit with descriptive message
git commit -m "Add user profile component with avatar upload"

# Push to GitHub
git push origin main
```

### Handling Merge Conflicts

If you get a merge conflict:

```powershell
# Pull changes first
git pull origin main

# Git will tell you which files have conflicts
# Open each file and look for:
# <<<<<<< HEAD
# Your changes
# =======
# Their changes
# >>>>>>> origin/main

# Manually resolve conflicts by editing the file
# Remove conflict markers and keep the code you want

# Stage resolved files
git add path/to/resolved/file.js

# Complete the merge
git commit -m "Resolve merge conflict in MyComponent"

# Push to GitHub
git push origin main
```

---

## 🌿 Using Branches (Recommended for Teams)

### Create Feature Branches

Instead of working directly on `main`, create feature branches:

```powershell
# Create and switch to new branch
git checkout -b feature/add-cv-upload

# Make your changes and commit
git add .
git commit -m "Add CV upload functionality"

# Push branch to GitHub
git push origin feature/add-cv-upload
```

### Create Pull Request

1. Go to GitHub repository
2. Click **"Pull requests"** tab
3. Click **"New pull request"**
4. Select your branch: `feature/add-cv-upload` → `main`
5. Add description of changes
6. Click **"Create pull request"**
7. Team members review and approve
8. Click **"Merge pull request"** when approved

### After Merge

```powershell
# Switch back to main
git checkout main

# Pull merged changes
git pull origin main

# Delete local feature branch (optional)
git branch -d feature/add-cv-upload
```

---

## 🚨 Important Security Reminders

### ⛔ NEVER Commit These Files:

- ❌ `.env` files (actual environment variables)
- ❌ `node_modules/` directory
- ❌ `__pycache__/` or `*.pyc` files
- ❌ `venv/` or virtual environments
- ❌ Database files (`*.db`, `*.sqlite`)
- ❌ API keys or passwords in code
- ❌ Personal access tokens

### ✅ Always Safe to Commit:

- ✅ Source code (`.js`, `.jsx`, `.py`, etc.)
- ✅ `.env.example` (template with placeholders)
- ✅ `README.md` and documentation
- ✅ Configuration files (`package.json`, `requirements.txt`)
- ✅ `.gitignore` file
- ✅ Docker files (`Dockerfile`, `docker-compose.yml`)

### 🔐 If You Accidentally Commit Secrets:

**DO NOT** just delete and recommit! The secret is in Git history.

**Fix it properly:**

```powershell
# Remove file from Git history
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch auth_fastapi/.env" --prune-empty --tag-name-filter cat -- --all

# Force push (⚠️ WARNING: This rewrites history!)
git push origin --force --all

# Immediately rotate the exposed secrets:
# 1. Change JWT_SECRET and REFRESH_SECRET
# 2. If database credentials were exposed, change them
# 3. Revoke any API keys that were committed
```

Better solution: Use **git-secrets** or **GitHub secret scanning** to prevent this.

---

## 📋 Quick Reference Commands

```powershell
# Check status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature/branch-name

# Switch branches
git checkout main

# See commit history
git log --oneline

# See changes
git diff

# Undo staged changes
git reset HEAD filename

# Discard local changes
git checkout -- filename

# See all branches
git branch -a

# Delete local branch
git branch -d branch-name
```

---

## 🆘 Common Issues

### Issue 1: "Permission denied"

**Solution**: Use Personal Access Token instead of password
1. Go to https://github.com/settings/tokens
2. Generate new token with `repo` scope
3. Use token as password when pushing

### Issue 2: "Remote origin already exists"

```powershell
# Remove old remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR_USERNAME/utopiahire.git
```

### Issue 3: "Divergent branches"

```powershell
# Pull with rebase
git pull --rebase origin main

# Or merge
git pull origin main
```

### Issue 4: "Large file warning"

Git doesn't like files > 50MB. If you have large files:

```powershell
# Use Git LFS for large files
git lfs install
git lfs track "*.psd"
git lfs track "*.zip"
git add .gitattributes
```

---

## ✅ Checklist Before Sharing with Team

- [ ] Repository created on GitHub
- [ ] All code pushed successfully
- [ ] README.md visible and formatted correctly
- [ ] `.env` files NOT visible in repository
- [ ] Team members added as collaborators
- [ ] Repository set to Private (if needed)
- [ ] All secrets in `.env.example` are placeholders
- [ ] Instructions tested by at least one team member
- [ ] Docker compose works from clean clone
- [ ] Frontend runs after `npm install`

---

## 🎉 You're Ready!

Your project is now on GitHub and your team can:
1. Clone the repository
2. Set up their local environment
3. Start developing
4. Push changes
5. Collaborate with pull requests

**Next steps**: Share the repository URL with your team and have them follow the setup instructions in README.md!
