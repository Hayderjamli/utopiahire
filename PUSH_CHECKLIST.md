# 🚀 GitHub Push Checklist

Use this checklist before pushing your project to GitHub.

## 📝 Pre-Push Verification

### 1. Security Check
- [ ] Run: `git status` and verify NO `.env` files are listed
- [ ] Confirm `.gitignore` is in project root
- [ ] Check `auth_fastapi/.env.example` exists (with placeholder values)
- [ ] Verify no API keys or passwords in source code
- [ ] Confirm `JWT_SECRET` and `REFRESH_SECRET` in code use environment variables

### 2. Documentation Check
- [ ] README.md exists and is complete
- [ ] Setup instructions are clear and tested
- [ ] All prerequisites listed (Docker, Node.js, Git)
- [ ] API endpoints documented
- [ ] Troubleshooting section included

### 3. Code Quality Check
- [ ] Remove any debug `console.log()` or `print()` statements
- [ ] Remove commented-out code blocks
- [ ] Check for TODO comments (fix or document them)
- [ ] No broken imports or unused imports
- [ ] All files properly formatted

### 4. Functionality Check
- [ ] Backend starts successfully: `docker compose up -d`
- [ ] Health check works: http://localhost:4000/health
- [ ] Frontend starts: `cd frontend && npm run dev`
- [ ] Registration works in browser
- [ ] Login works in browser
- [ ] No errors in browser console
- [ ] No errors in Docker logs: `docker compose logs auth`

### 5. Files to Include
- [ ] `README.md` - Main documentation
- [ ] `GITHUB_GUIDE.md` - Step-by-step push guide
- [ ] `.gitignore` - Excludes sensitive files
- [ ] `auth_fastapi/.env.example` - Environment template
- [ ] `docker-compose.yml` - Container orchestration
- [ ] All source code files
- [ ] `package.json` and `requirements.txt`

### 6. Files to Exclude (should be in .gitignore)
- [ ] `auth_fastapi/.env` (actual secrets)
- [ ] `frontend/.env` (if exists)
- [ ] `node_modules/` directory
- [ ] `__pycache__/` directories
- [ ] `venv/` or `env/` directories
- [ ] `.DS_Store` (Mac)
- [ ] `*.log` files
- [ ] Database files

---

## 🎯 Push Steps (Quick Reference)

```powershell
# 1. Navigate to project
cd "c:\Users\Hayder Jamli\Desktop\cs challenge 2810"

# 2. Initialize git (if not done)
git init

# 3. Check status
git status

# 4. Stage all files
git add .

# 5. Commit
git commit -m "Initial commit: FastAPI auth + React frontend"

# 6. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/utopiahire.git

# 7. Push to GitHub
git branch -M main
git push -u origin main
```

---

## 👥 After Pushing - Share with Team

### Send to Partners:

**Subject**: UtopiaHire Project - Setup Instructions

**Message Template**:
```
Hi team,

I've pushed our UtopiaHire project to GitHub! Here's how to get started:

🔗 Repository: https://github.com/YOUR_USERNAME/utopiahire

📋 Setup Steps:
1. Clone: git clone https://github.com/YOUR_USERNAME/utopiahire.git
2. Navigate: cd utopiahire
3. Copy env: cp auth_fastapi/.env.example auth_fastapi/.env
4. Start backend: docker compose up -d --build
5. Start frontend: cd frontend && npm install && npm run dev
6. Open browser: http://localhost:5173

📖 Full documentation in README.md
🔧 Git workflow guide in GITHUB_GUIDE.md

Let me know if you encounter any issues!
```

### Invite Collaborators:
1. Go to repo → Settings → Collaborators
2. Add each partner by GitHub username
3. Give them "Write" access
4. They'll receive an email invitation

---

## ✅ Post-Push Verification

After pushing, check on GitHub:

- [ ] All files visible in repository
- [ ] README.md displays correctly on main page
- [ ] NO `.env` files visible (only `.env.example`)
- [ ] File structure matches local project
- [ ] Commit history shows your commits
- [ ] Repository description is set
- [ ] Topics/tags added (optional but helpful)

---

## 🆘 Emergency: If You Pushed Secrets

If you accidentally committed `.env` with real secrets:

### Immediate Actions:
1. **DO NOT** panic - but act quickly
2. **Rotate ALL secrets immediately**:
   - Generate new `JWT_SECRET`: `openssl rand -hex 32`
   - Generate new `REFRESH_SECRET`: `openssl rand -hex 32`
   - Update in your local `.env` file
   - Restart auth service: `docker compose restart auth`
3. **Remove from Git history**:
   ```powershell
   git filter-branch --force --index-filter "git rm --cached --ignore-unmatch auth_fastapi/.env" --prune-empty --tag-name-filter cat -- --all
   git push origin --force --all
   ```
4. **Verify** the file is gone from GitHub
5. **Update team** with new secrets via secure channel (NOT GitHub issues/comments)

---

## 📞 Help Resources

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com/
- **Docker Docs**: https://docs.docker.com/
- **FastAPI Docs**: https://fastapi.tiangolo.com/
- **React Docs**: https://react.dev/

---

## 🎉 Success Criteria

Your push is successful when:
- ✅ Repository is accessible on GitHub
- ✅ Team members can clone and run the project
- ✅ No secrets exposed in repository
- ✅ README instructions work from clean clone
- ✅ All tests pass (when you add them)
- ✅ No errors in GitHub Actions (if set up)

---

**Good luck with your project! 🚀**
