# BloomTechUSA Deployment Configuration

Your specific configuration values for deploying to Railway and Cloudflare Pages.

---

## 🔐 Your Generated JWT Secret

**IMPORTANT**: This is your production JWT secret. Keep it secure and never share it publicly.

```
dbf0285a72962f6c43f55a77e75e10ba907b2803f01a3306a0a25e4beb66703f1f73e01d7e77d4b317c54bddf138d34c84f7319fec526232d6132bfa0dbcf323
```

---

## 📋 Railway Backend Configuration

### Environment Variables to Set in Railway

Go to your Railway backend service → "Variables" tab → Add these variables:

```env
# Database (automatically linked from Railway PostgreSQL service)
DATABASE_URL=postgres.railway.internal

# Server Configuration
PORT=5000
NODE_ENV=production

# JWT Secret (COPY THE VALUE ABOVE)
JWT_SECRET=dbf0285a72962f6c43f55a77e75e10ba907b2803f01a3306a0a25e4beb66703f1f73e01d7e77d4b317c54bddf138d34c84f7319fec526232d6132bfa0dbcf323

# Google OAuth
GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com

# CORS Configuration
ALLOWED_ORIGINS=https://bloomtechusa.com,https://www.bloomtechusa.com,https://bloomtechusa.pages.dev,https://9b1d7401.bloomtechusa.pages.dev
```

### Railway Service Settings

**Root Directory**: `backend`

**Build Command**: `npm install && npm run build`

**Start Command**: `npm start`

**Region**: US West (or closest to your users)

---

## 🌐 Cloudflare Pages Configuration

### Environment Variables to Set in Cloudflare Pages

Go to your Cloudflare Pages project → "Settings" → "Environment variables" → Add these:

```env
# Node Version
NODE_VERSION=18

# Backend API URL (update with your actual Railway URL after deployment)
VITE_API_URL=https://your-railway-backend.up.railway.app

# Google OAuth
VITE_GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com
```

### Cloudflare Pages Build Settings

**Project name**: `bloomtechusa`

**Production branch**: `main`

**Framework preset**: Vite

**Build command**: `npm run build`

**Build output directory**: `dist`

**Root directory**: `frontend`

### Custom Domain Setup

1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add these domains:
   - `bloomtechusa.com`
   - `www.bloomtechusa.com`
4. Follow Cloudflare's DNS instructions

---

## 🔄 Update Process After Deployment

### Step 1: After Railway Backend Deploys

1. Copy your Railway backend URL (e.g., `https://bloomtechusa-production.up.railway.app`)
2. Update Cloudflare Pages environment variable:
   ```
   VITE_API_URL=https://your-actual-railway-url.up.railway.app
   ```
3. Redeploy frontend in Cloudflare Pages

### Step 2: After Cloudflare Pages Deploys

1. Copy your Cloudflare Pages URL (e.g., `https://bloomtechusa.pages.dev`)
2. Update Railway backend environment variable:
   ```
   ALLOWED_ORIGINS=https://bloomtechusa.com,https://www.bloomtechusa.com,https://bloomtechusa.pages.dev
   ```
3. Railway will auto-redeploy

### Step 3: After Getting Google Client ID

1. Follow the instructions in `GOOGLE_OAUTH_SETUP.md`
2. Copy your Google Client ID
3. Update both Railway and Cloudflare Pages environment variables:
   ```
   GOOGLE_CLIENT_ID=YOUR_ACTUAL_CLIENT_ID.apps.googleusercontent.com
   VITE_GOOGLE_CLIENT_ID=YOUR_ACTUAL_CLIENT_ID.apps.googleusercontent.com
   ```

---

## 📝 Local Development Configuration

### Backend `.env` File

Create `backend/.env` with:

```env
# Database Configuration
DATABASE_URL=postgres://postgres:password@localhost:5432/bloomtech

# JWT Configuration
JWT_SECRET=dbf0285a72962f6c43f55a77e75e10ba907b2803f01a3306a0a25e4beb66703f1f73e01d7e77d4b317c54bddf138d34c84f7319fec526232d6132bfa0dbcf323

# Google Auth Configuration
VITE_GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com
GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com

# Server Port
PORT=5000
```

### Frontend `.env` File

Create `frontend/.env` with:

```env
# Google OAuth Client ID
VITE_GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com

# Backend API URL
VITE_API_URL=http://localhost:5000
```

---

## 🚀 Complete Deployment Checklist

### Pre-Deployment
- [ ] Push your code to GitHub
- [ ] Review all code for any hardcoded secrets (there should be none)
- [ ] Ensure `.env` files are in `.gitignore`

### Backend (Railway)
- [ ] Create Railway account at https://railway.app
- [ ] Create new project from GitHub repo
- [ ] Add PostgreSQL database to project
- [ ] Configure backend service:
  - [ ] Set root directory to `backend`
  - [ ] Set build command: `npm install && npm run build`
  - [ ] Set start command: `npm start`
- [ ] Add environment variables (see above)
- [ ] Link DATABASE_URL from PostgreSQL service
- [ ] Deploy backend
- [ ] Run database initialization: `railway run npm run init-db`
- [ ] Copy Railway backend URL
- [ ] Test backend: Visit URL, should see "BloomTechUS API is running..."

### Frontend (Cloudflare Pages)
- [ ] Create Cloudflare account at https://dash.cloudflare.com
- [ ] Create new Pages project
- [ ] Connect to GitHub repository
- [ ] Configure build settings:
  - [ ] Set root directory to `frontend`
  - [ ] Set framework preset to Vite
  - [ ] Set build command: `npm run build`
  - [ ] Set output directory: `dist`
- [ ] Add environment variables (use Railway URL from above)
- [ ] Deploy frontend
- [ ] Copy Cloudflare Pages URL
- [ ] Set up custom domain: bloomtechusa.com
- [ ] Test frontend: Visit URL, check all pages load

### Post-Deployment
- [ ] Update Railway ALLOWED_ORIGINS with Cloudflare URLs
- [ ] Test frontend-backend integration
- [ ] Follow GOOGLE_OAUTH_SETUP.md to create Google Client ID
- [ ] Update both Railway and Cloudflare with Google Client ID
- [ ] Test Google Sign-In functionality
- [ ] Verify all features work in production
- [ ] Set up monitoring and alerts
- [ ] Configure database backups in Railway

### Google OAuth
- [ ] Follow GOOGLE_OAUTH_SETUP.md guide
- [ ] Create Google Cloud project
- [ ] Configure OAuth consent screen
- [ ] Create OAuth client ID
- [ ] Add authorized JavaScript origins:
  - [ ] http://localhost:5173
  - [ ] https://bloomtechusa.com
  - [ ] https://www.bloomtechusa.com
  - [ ] https://bloomtechusa.pages.dev
- [ ] Add authorized redirect URIs (same as above)
- [ ] Copy Client ID
- [ ] Update Railway backend environment variables
- [ ] Update Cloudflare Pages environment variables
- [ ] Test Google Sign-In locally
- [ ] Test Google Sign-In in production
- [ ] Publish app (move from Testing to Production)

---

## 🔍 Testing URLs

### Local Development
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **Backend API Test**: http://localhost:5000/api/users

### Production (after deployment)
- **Custom Domain**: https://bloomtechusa.com
- **Cloudflare Pages**: https://bloomtechusa.pages.dev
- **Railway Backend**: https://your-backend.railway.app
- **Backend API Test**: https://your-backend.railway.app/api/users

---

## ⚠️ Important Security Reminders

1. **Never commit `.env` files** - They're in `.gitignore`, keep it that way
2. **Never share your JWT_SECRET** - It's unique to your deployment
3. **Rotate secrets if exposed** - Generate new JWT secret and update everywhere
4. **Use HTTPS in production** - Railway and Cloudflare handle this automatically
5. **Keep dependencies updated** - Run `npm audit` regularly
6. **Enable 2FA** - On Railway, Cloudflare, Google Cloud, and GitHub accounts
7. **Review CORS settings** - Only allow your actual domains
8. **Monitor logs** - Check Railway and Cloudflare dashboards regularly

---

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section in `DEPLOYMENT_GUIDE.md`
2. Review logs in Railway dashboard
3. Review build logs in Cloudflare Pages
4. Check environment variables are set correctly
5. Verify database is initialized
6. Test locally first before debugging production

---

## 🎯 Quick Commands

### Local Development
```bash
# Start backend
cd backend && npm run dev

# Start frontend (in new terminal)
cd frontend && npm run dev
```

### Database Management
```bash
# Initialize database (Railway CLI)
railway run npm run init-db

# Or manually connect
psql [DATABASE_URL from Railway]
```

### Deployment
```bash
# Automatic - just push to GitHub
git add .
git commit -m "Your commit message"
git push

# Both Railway and Cloudflare will auto-deploy
```

---

## 📦 What's Next?

After successful deployment:

1. ✅ Set up Google Analytics (optional)
2. ✅ Configure email service (optional)
3. ✅ Set up error tracking (e.g., Sentry)
4. ✅ Enable database backups in Railway
5. ✅ Set up uptime monitoring
6. ✅ Create privacy policy and terms of service pages
7. ✅ Test all features thoroughly
8. ✅ Get SSL certificate (automatic with Cloudflare)
9. ✅ Optimize images and assets
10. ✅ Run performance tests

---

**Good luck with your deployment!** 🚀

Your application stack:
- **Frontend**: React + Vite + Tailwind CSS → Cloudflare Pages
- **Backend**: Node.js + Express + TypeScript → Railway
- **Database**: PostgreSQL → Railway
- **Domain**: bloomtechusa.com
- **SSL**: Automatic (Railway + Cloudflare)
- **Auto-deployment**: Git push to main branch
