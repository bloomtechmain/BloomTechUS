# BloomTechUSA Deployment Guide

Complete instructions for deploying the backend to Railway and the frontend to Cloudflare Pages.

---

## Table of Contents

1. [Backend Deployment (Railway)](#backend-deployment-railway)
2. [Frontend Deployment (Cloudflare Pages)](#frontend-deployment-cloudflare-pages)
3. [Post-Deployment Configuration](#post-deployment-configuration)
4. [Troubleshooting](#troubleshooting)

---

## Backend Deployment (Railway)

Railway provides seamless deployment for Node.js applications with built-in PostgreSQL database support.

### Prerequisites

- GitHub account
- Railway account (sign up at https://railway.app)
- Your code pushed to a GitHub repository

### Step 1: Create Railway Project

1. **Log in to Railway**
   - Go to https://railway.app
   - Click "Login" and authenticate with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your GitHub repositories
   - Select your `BloomTechUSA` repository

3. **Configure Service**
   - Railway will detect your monorepo structure
   - You need to specify the backend directory

### Step 2: Add PostgreSQL Database

1. **Add Database to Project**
   - In your Railway project dashboard, click "New"
   - Select "Database" → "Add PostgreSQL"
   - Railway will provision a PostgreSQL instance automatically

2. **Note the Connection Details**
   - Click on the PostgreSQL service
   - Go to "Variables" tab
   - Railway automatically creates a `DATABASE_URL` variable
   - This will be used by your backend

### Step 3: Configure Backend Service

1. **Set Root Directory**
   - Click on your backend service
   - Go to "Settings" tab
   - Under "Build & Deploy", find "Root Directory"
   - Set it to: `backend`
   - Click "Update"

2. **Configure Build Settings**
   - Still in Settings, configure:
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
   - Click "Update" for each

3. **Set Environment Variables**
   - Go to "Variables" tab
   - Add the following variables (click "New Variable" for each):

   ```
   PORT=5000
   NODE_ENV=production
   JWT_SECRET=your_secure_jwt_secret_key_here_change_this
   GOOGLE_CLIENT_ID=your_google_client_id_here
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

   **Important Notes:**
   - `DATABASE_URL` is automatically provided by Railway's PostgreSQL service
   - Change `JWT_SECRET` to a secure random string (at least 32 characters)
   - Get `GOOGLE_CLIENT_ID` from Google Cloud Console (if using Google OAuth)
   - Railway will automatically link the PostgreSQL `DATABASE_URL`

4. **Link Database to Backend**
   - Click on your backend service
   - Go to "Variables" tab
   - Click "New Variable" → "Add Reference"
   - Select your PostgreSQL database
   - Select `DATABASE_URL` variable
   - This connects your backend to the database

### Step 4: Initialize Database

After first deployment, you need to initialize your database schema:

1. **Access Railway CLI** (Optional but recommended)
   ```bash
   npm install -g @railway/cli
   railway login
   railway link
   ```

2. **Run Database Initialization**
   - Option A: Using Railway CLI locally:
     ```bash
     cd backend
     railway run npm run init-db
     ```
   
   - Option B: Using Railway Dashboard:
     - Go to your backend service
     - Click on "Deployments" tab
     - Click on the latest deployment
     - Open the deployment logs
     - You can manually run commands in the Railway shell

3. **Verify Database Tables**
   - In Railway dashboard, click on PostgreSQL service
   - Go to "Data" tab to see your tables

### Step 5: Deploy Backend

1. **Trigger Deployment**
   - Railway automatically deploys on every git push to main branch
   - Or click "Deploy" button in Railway dashboard

2. **Get Your Backend URL**
   - Go to your backend service
   - Click on "Settings" tab
   - Under "Networking", you'll see:
     - **Public URL** (e.g., `https://your-app-production.up.railway.app`)
   - If not visible, click "Generate Domain"
   - **Save this URL** - you'll need it for frontend configuration

3. **Test Your Backend**
   - Visit your backend URL in browser
   - You should see: "BloomTechUS API is running..."
   - Test API endpoints:
     - `https://your-app.railway.app/api/users`
     - `https://your-app.railway.app/api/auth`

### Step 6: Configure CORS for Production

Update your backend CORS settings to allow your Cloudflare Pages domain:

1. **Edit backend/index.ts** (locally):
   ```typescript
   app.use(cors({
     origin: [
       'http://localhost:5173',
       'http://localhost:5174', 
       'https://your-cloudflare-pages-domain.pages.dev',
       'https://your-custom-domain.com' // if you have one
     ],
     credentials: true
   }));
   ```

2. **Or use environment variable** (recommended):
   - In Railway, add a new variable:
     ```
     ALLOWED_ORIGINS=https://your-cloudflare-pages-domain.pages.dev,https://your-custom-domain.com
     ```
   
   - Update `backend/index.ts`:
     ```typescript
     const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'];
     app.use(cors({
       origin: allowedOrigins,
       credentials: true
     }));
     ```

3. **Commit and push changes**
   ```bash
   git add .
   git commit -m "Configure CORS for production"
   git push
   ```

---

## Frontend Deployment (Cloudflare Pages)

Cloudflare Pages provides fast, global CDN hosting for static sites with automatic deployments.

### Prerequisites

- Cloudflare account (sign up at https://dash.cloudflare.com)
- Your code pushed to GitHub repository
- Railway backend URL from previous steps

### Step 1: Create Cloudflare Pages Project

1. **Log in to Cloudflare**
   - Go to https://dash.cloudflare.com
   - Navigate to "Workers & Pages"
   - Click "Create application" → "Pages" → "Connect to Git"

2. **Connect Your Repository**
   - Click "Connect GitHub" (or GitLab)
   - Authorize Cloudflare Pages
   - Select your `BloomTechUSA` repository
   - Click "Begin setup"

### Step 2: Configure Build Settings

1. **Project Settings**
   - **Project name**: `bloomtechusa` (or your preferred name)
   - **Production branch**: `main` (or your default branch)

2. **Build Configuration**
   - **Framework preset**: Select "Vite" from dropdown
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `frontend`

3. **Environment Variables** (click "Add variable" for each)
   ```
   NODE_VERSION=18
   VITE_API_URL=https://your-railway-backend-url.railway.app
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

   **Important:**
   - Replace `your-railway-backend-url.railway.app` with your actual Railway backend URL
   - Use the same Google Client ID as backend
   - Cloudflare requires `NODE_VERSION` to be specified

### Step 3: Deploy Frontend

1. **Start Deployment**
   - Click "Save and Deploy"
   - Cloudflare will start building your application
   - Wait for build to complete (usually 2-5 minutes)

2. **Build Process**
   - You can watch the build logs in real-time
   - Common issues:
     - Missing environment variables
     - Incorrect root directory
     - Build command errors

3. **Get Your Frontend URL**
   - After successful deployment, you'll see:
     - **Production URL**: `https://your-project.pages.dev`
   - You can also set up a custom domain

### Step 4: Configure Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your Pages project
   - Click "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `www.bloomtechusa.com`)
   - Follow DNS configuration instructions

2. **SSL/TLS**
   - Cloudflare automatically provisions SSL certificates
   - Your site will be available over HTTPS

### Step 5: Verify Frontend Deployment

1. **Visit Your Site**
   - Open your Cloudflare Pages URL
   - Navigate through the application
   - Check all pages load correctly

2. **Test API Integration**
   - Try logging in / registering
   - Test any features that call the backend API
   - Check browser console for errors

3. **Common Issues:**
   - **API calls failing**: Check `VITE_API_URL` is correct
   - **CORS errors**: Update Railway backend CORS settings
   - **404 on routes**: Verify `_redirects` file exists in `frontend/public/`

---

## Post-Deployment Configuration

### Update Backend CORS

Now that you have your Cloudflare Pages URL, update Railway backend:

1. **Go to Railway Dashboard**
   - Select your backend service
   - Go to "Variables" tab
   - Add or update:
     ```
     ALLOWED_ORIGINS=https://your-project.pages.dev,https://www.yourdomain.com
     ```

2. **Ensure backend code handles CORS**
   - Your backend should already be configured
   - Railway will auto-redeploy with new environment variables

### Update Frontend API URL

If you change your Railway backend URL:

1. **Go to Cloudflare Pages**
   - Select your project
   - Go to "Settings" → "Environment variables"
   - Update `VITE_API_URL` to new Railway URL
   - Click "Save"

2. **Trigger Redeploy**
   - Go to "Deployments" tab
   - Click "Retry deployment" on latest build
   - Or push a new commit to trigger automatic deployment

### Enable Preview Deployments

Both platforms support preview deployments:

**Railway:**
- Create a new branch (e.g., `staging`)
- Configure a new environment in Railway
- Railway can auto-deploy from multiple branches

**Cloudflare Pages:**
- Automatically creates preview deployments for pull requests
- Preview URL format: `https://branch-name.your-project.pages.dev`
- Each PR gets a unique preview URL

---

## Environment Variables Summary

### Backend (Railway)

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection (auto-generated) | `postgresql://user:pass@host:5432/db` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `production` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secure_random_string_32_chars_min` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `123456789-abc.apps.googleusercontent.com` |
| `VITE_GOOGLE_CLIENT_ID` | Same as above | Same as above |
| `ALLOWED_ORIGINS` | Allowed CORS origins (optional) | `https://yoursite.pages.dev` |

### Frontend (Cloudflare Pages)

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_VERSION` | Node.js version | `18` |
| `VITE_API_URL` | Backend API URL | `https://your-app.railway.app` |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth client ID | `123456789-abc.apps.googleusercontent.com` |

---

## Automatic Deployments

### Railway (Backend)

- **Automatic**: Deploys on every push to `main` branch
- **Manual**: Click "Deploy" in Railway dashboard
- **Rollback**: Available in "Deployments" tab

### Cloudflare Pages (Frontend)

- **Automatic**: Deploys on every push to `main` branch
- **Preview**: Creates preview for every pull request
- **Rollback**: Available in "Deployments" tab, click "Rollback to this deployment"

---

## Monitoring and Logs

### Railway Monitoring

1. **View Logs**
   - Go to your service
   - Click "Deployments" tab
   - Click on a deployment to see logs

2. **Metrics**
   - CPU and memory usage available in dashboard
   - Set up alerts for errors

3. **Database**
   - View query performance in PostgreSQL service
   - Monitor database size and connections

### Cloudflare Pages Monitoring

1. **Build Logs**
   - Available in "Deployments" tab
   - Shows complete build output

2. **Analytics**
   - Go to "Analytics" tab
   - View traffic, page views, bandwidth usage

3. **Function Logs** (if using)
   - Real-time logs for Cloudflare Pages Functions
   - Available in dashboard

---

## Troubleshooting

### Backend Issues

**Problem: Database connection fails**
- Solution: Verify `DATABASE_URL` is correctly linked from PostgreSQL service
- Check database service is running in Railway dashboard

**Problem: Build fails**
- Solution: Check build logs for errors
- Verify `package.json` has correct scripts
- Ensure TypeScript compiles without errors locally first

**Problem: API returns 500 errors**
- Solution: Check deployment logs in Railway
- Verify all environment variables are set
- Check database tables are initialized

**Problem: CORS errors**
- Solution: Update `ALLOWED_ORIGINS` environment variable
- Ensure frontend domain is included in CORS configuration

### Frontend Issues

**Problem: Build fails**
- Solution: Check build logs in Cloudflare Pages
- Verify `NODE_VERSION=18` is set
- Test build locally: `cd frontend && npm run build`

**Problem: API calls fail**
- Solution: Verify `VITE_API_URL` points to correct Railway URL
- Check Railway backend is running
- Verify CORS is configured on backend

**Problem: Routes return 404**
- Solution: Verify `frontend/public/_redirects` exists with:
  ```
  /*    /index.html   200
  ```

**Problem: Environment variables not working**
- Solution: Environment variables must start with `VITE_`
- Rebuild after changing environment variables
- Variables are injected at build time, not runtime

### Google OAuth Issues

**Problem: Google Sign-In not working**
- Solution: 
  1. Verify Google Cloud Console OAuth configuration
  2. Add authorized JavaScript origins:
     - `https://your-project.pages.dev`
     - `https://your-custom-domain.com`
  3. Add authorized redirect URIs:
     - `https://your-project.pages.dev`
     - `https://your-custom-domain.com`
  4. Ensure `GOOGLE_CLIENT_ID` matches in both backend and frontend

---

## Cost Estimates

### Railway
- **Free Tier**: $5 worth of usage per month
- **Hobby Plan**: $5/month + usage
- **Pro Plan**: $20/month + usage
- Typical costs for this app: ~$5-10/month

### Cloudflare Pages
- **Free Tier**: 
  - Unlimited requests
  - Unlimited bandwidth
  - 500 builds per month
  - 1 build at a time
- **Pro Plan**: $20/month (for concurrent builds)
- Typical costs: **FREE** for most projects

---

## Security Best Practices

### Production Checklist

- [ ] Change `JWT_SECRET` to a strong, unique value
- [ ] Use environment variables for all secrets
- [ ] Enable HTTPS only (handled by Railway & Cloudflare)
- [ ] Configure CORS to only allow your frontend domain
- [ ] Set up rate limiting on API endpoints
- [ ] Enable Railway/Cloudflare security features
- [ ] Regular security audits with `npm audit`
- [ ] Keep dependencies updated
- [ ] Set up monitoring and alerts
- [ ] Configure database backups in Railway

---

## Maintenance

### Regular Updates

1. **Update Dependencies**
   ```bash
   # Backend
   cd backend
   npm update
   npm audit fix
   
   # Frontend
   cd frontend
   npm update
   npm audit fix
   ```

2. **Push updates**
   ```bash
   git add .
   git commit -m "Update dependencies"
   git push
   ```
   - Both Railway and Cloudflare will auto-deploy

### Database Backups

**Railway:**
- Go to PostgreSQL service
- Click "Backups" tab
- Configure automatic backups
- Download backups manually when needed

### Rollback Procedure

**Backend (Railway):**
1. Go to "Deployments" tab
2. Find working deployment
3. Click "..." → "Redeploy"

**Frontend (Cloudflare):**
1. Go to "Deployments" tab
2. Find working deployment
3. Click "Manage deployment" → "Rollback to this deployment"

---

## Quick Reference Commands

### Local Development
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

### Railway CLI
```bash
# Install
npm install -g @railway/cli

# Login
railway login

# Link project
railway link

# View logs
railway logs

# Run commands in production
railway run npm run init-db
```

### Build Locally
```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

---

## Support Resources

### Documentation
- **Railway**: https://docs.railway.app
- **Cloudflare Pages**: https://developers.cloudflare.com/pages
- **Vite**: https://vitejs.dev/guide
- **Express**: https://expressjs.com

### Community
- Railway Discord: https://discord.gg/railway
- Cloudflare Discord: https://discord.gg/cloudflare
- GitHub Issues: For project-specific problems

---

## Deployment Checklist

Use this checklist when deploying:

### Backend (Railway)
- [ ] Create Railway account and project
- [ ] Add PostgreSQL database
- [ ] Configure root directory to `backend`
- [ ] Set build command: `npm install && npm run build`
- [ ] Set start command: `npm start`
- [ ] Add all environment variables
- [ ] Link DATABASE_URL from PostgreSQL
- [ ] Deploy and verify
- [ ] Initialize database schema
- [ ] Get Railway backend URL
- [ ] Test API endpoints

### Frontend (Cloudflare Pages)
- [ ] Create Cloudflare account
- [ ] Connect GitHub repository
- [ ] Configure root directory to `frontend`
- [ ] Set framework preset to Vite
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `dist`
- [ ] Add environment variables (NODE_VERSION, VITE_API_URL, VITE_GOOGLE_CLIENT_ID)
- [ ] Deploy and verify
- [ ] Test website functionality
- [ ] Verify API integration
- [ ] Configure custom domain (optional)

### Post-Deployment
- [ ] Update backend CORS with frontend URL
- [ ] Test Google OAuth (if applicable)
- [ ] Set up monitoring
- [ ] Configure database backups
- [ ] Update JWT_SECRET to production value
- [ ] Test all features end-to-end
- [ ] Set up preview/staging environments (optional)

---

## Congratulations! 🎉

Your BloomTechUSA application is now deployed and running in production!

- **Backend**: Hosted on Railway with PostgreSQL database
- **Frontend**: Hosted on Cloudflare Pages with global CDN
- **SSL**: Automatically configured on both platforms
- **Auto-deployment**: Enabled on git push

For questions or issues, refer to the troubleshooting section or consult the platform documentation.
