# 🚀 Quick Start Deployment Guide

## Your Configuration at a Glance

### 🔑 Credentials
- **JWT Secret**: `dbf0285a72962f6c43f55a77e75e10ba907b2803f01a3306a0a25e4beb66703f1f73e01d7e77d4b317c54bddf138d34c84f7319fec526232d6132bfa0dbcf323`
- **Google Client ID**: Create at https://console.cloud.google.com (see `GOOGLE_OAUTH_SETUP.md`)
- **Domain**: bloomtechusa.com
- **Database**: postgres.railway.internal (automatically set by Railway)

---

## 📚 Documentation Files

1. **DEPLOYMENT_GUIDE.md** - Complete deployment instructions
2. **DEPLOYMENT_CONFIG.md** - Your specific configuration values
3. **GOOGLE_OAUTH_SETUP.md** - How to create Google Client ID
4. **QUICK_START.md** - This file (quick reference)

---

## 🎯 3-Step Deployment Process

### Step 1: Deploy Backend to Railway
1. Go to https://railway.app → Create account
2. New Project → Deploy from GitHub → Select `BloomTechUSA`
3. Add PostgreSQL database to project
4. Configure backend service:
   - Root directory: `backend`
   - Build: `npm install && npm run build`
   - Start: `npm start`
5. Add environment variables (see below)
6. Deploy → Get Railway URL
7. Run: `railway run npm run init-db`

### Step 2: Deploy Frontend to Cloudflare Pages
1. Go to https://dash.cloudflare.com → Create account
2. Workers & Pages → Create → Connect to Git
3. Select `BloomTechUSA` repository
4. Configure:
   - Root directory: `frontend`
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
5. Add environment variables (see below)
6. Deploy → Get Cloudflare URL
7. Set up custom domain: bloomtechusa.com

### Step 3: Configure Google OAuth
1. Go to https://console.cloud.google.com
2. Create new project: `BloomTechUSA`
3. Configure OAuth consent screen
4. Create OAuth Client ID
5. Add authorized origins and redirect URIs
6. Copy Client ID → Update Railway & Cloudflare

---

## 🔧 Environment Variables

### Railway Backend

```
DATABASE_URL=postgres.railway.internal
PORT=5000
NODE_ENV=production
JWT_SECRET=dbf0285a72962f6c43f55a77e75e10ba907b2803f01a3306a0a25e4beb66703f1f73e01d7e77d4b317c54bddf138d34c84f7319fec526232d6132bfa0dbcf323
GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com
ALLOWED_ORIGINS=https://bloomtechusa.com,https://www.bloomtechusa.com,https://bloomtechusa.pages.dev,https://9b1d7401.bloomtechusa.pages.dev
```

### Cloudflare Pages Frontend

```
NODE_VERSION=18
VITE_API_URL=https://your-railway-backend.up.railway.app
VITE_GOOGLE_CLIENT_ID=664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com
```

---

## 🌐 Google OAuth URIs

### Authorized JavaScript Origins
```
http://localhost:5173
https://bloomtechusa.com
https://www.bloomtechusa.com
https://bloomtechusa.pages.dev
```

### Authorized Redirect URIs
```
http://localhost:5173
https://bloomtechusa.com
https://www.bloomtechusa.com
https://bloomtechusa.pages.dev
```

---

## ✅ Deployment Checklist

- [ ] Deploy backend to Railway
- [ ] Add PostgreSQL database
- [ ] Set Railway environment variables
- [ ] Initialize database
- [ ] Deploy frontend to Cloudflare Pages
- [ ] Set Cloudflare environment variables
- [ ] Update VITE_API_URL with Railway URL
- [ ] Set up custom domain
- [ ] Create Google OAuth credentials
- [ ] Update Google Client ID everywhere
- [ ] Test in production

---

## 🔗 Important Links

- **Railway**: https://railway.app
- **Cloudflare Pages**: https://dash.cloudflare.com
- **Google Cloud**: https://console.cloud.google.com
- **Railway Docs**: https://docs.railway.app
- **Cloudflare Docs**: https://developers.cloudflare.com/pages

---

## 🆘 Troubleshooting

**Backend won't start**: Check environment variables in Railway
**Frontend build fails**: Verify NODE_VERSION=18 is set, ensure build command is `npm run build` not `npx vitepress build`
**CORS errors**: Update ALLOWED_ORIGINS in Railway
**Google OAuth fails**: Check authorized URIs in Google Cloud Console
**Database errors**: Run `railway run npm run init-db`

For detailed help, see `DEPLOYMENT_GUIDE.md`

---

## 💡 Pro Tips

1. **Auto-deploy**: Push to GitHub main branch → automatic deployment
2. **Logs**: Check Railway & Cloudflare dashboards for deployment logs
3. **Rollback**: Both platforms support rolling back to previous deployments
4. **Preview**: Cloudflare creates preview deployments for pull requests
5. **CLI**: Install Railway CLI for easier database management

---

**Next Steps**: Start with Railway deployment, then Cloudflare, then Google OAuth. Good luck! 🎉
