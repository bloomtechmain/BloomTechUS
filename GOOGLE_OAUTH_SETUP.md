# Google OAuth Setup Guide

Complete step-by-step instructions for creating a Google Client ID for your BloomTechUSA application.

---

## Overview

Google OAuth allows users to sign in to your application using their Google accounts. You'll need to create a Google Cloud project and configure OAuth credentials.

---

## Step-by-Step Instructions

### Step 1: Create a Google Cloud Project

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create New Project**
   - Click on the project dropdown at the top of the page
   - Click "New Project"
   - **Project Name**: `BloomTechUSA` (or your preferred name)
   - **Organization**: Leave as default or select your organization
   - Click "Create"
   - Wait for the project to be created (usually takes a few seconds)

3. **Select Your Project**
   - Once created, make sure your new project is selected in the dropdown

---

### Step 2: Enable Google+ API (Required for OAuth)

1. **Navigate to APIs & Services**
   - Click on the hamburger menu (☰) in the top-left
   - Go to "APIs & Services" → "Library"

2. **Enable Required APIs**
   - Search for "Google+ API"
   - Click on it and click "Enable"
   - Alternatively, search for "Google Identity Services" and enable it

---

### Step 3: Configure OAuth Consent Screen

1. **Go to OAuth Consent Screen**
   - In the left sidebar, click "OAuth consent screen"

2. **Choose User Type**
   - Select **"External"** (allows anyone with a Google account to sign in)
   - Click "Create"

3. **Fill in App Information**
   - **App name**: `BloomTechUSA`
   - **User support email**: Your email address
   - **App logo**: Upload your logo (optional but recommended)
   - **Application home page**: `https://bloomtechusa.com`
   - **Application privacy policy link**: `https://bloomtechusa.com/privacy` (create this page later)
   - **Application terms of service link**: `https://bloomtechusa.com/terms` (create this page later)

4. **Developer Contact Information**
   - **Email addresses**: Your email address
   - Click "Save and Continue"

5. **Scopes** (Step 2)
   - Click "Add or Remove Scopes"
   - Select the following scopes:
     - `./auth/userinfo.email`
     - `./auth/userinfo.profile`
     - `openid`
   - Click "Update"
   - Click "Save and Continue"

6. **Test Users** (Step 3)
   - Add test users if you're still in testing mode
   - You can add your email and team members' emails
   - Click "Save and Continue"

7. **Summary** (Step 4)
   - Review your settings
   - Click "Back to Dashboard"

---

### Step 4: Create OAuth Client ID

1. **Go to Credentials**
   - In the left sidebar, click "Credentials"
   - Click "Create Credentials" at the top
   - Select "OAuth client ID"

2. **Configure OAuth Client**
   - **Application type**: Select "Web application"
   - **Name**: `BloomTechUSA Web Client`

3. **Authorized JavaScript Origins**
   Add the following origins (click "Add URI" for each):
   ```
   http://localhost:5173
   http://localhost:5174
   https://bloomtechusa.com
   https://www.bloomtechusa.com
   https://bloomtechusa.pages.dev
   https://your-project-name.pages.dev
   ```
   
   **Note**: Replace `your-project-name` with your actual Cloudflare Pages project name

4. **Authorized Redirect URIs**
   Add the following redirect URIs (click "Add URI" for each):
   ```
   http://localhost:5173
   http://localhost:5174
   https://bloomtechusa.com
   https://www.bloomtechusa.com
   https://bloomtechusa.pages.dev
   https://your-project-name.pages.dev
   ```
   
   **Note**: Replace `your-project-name` with your actual Cloudflare Pages project name

5. **Create**
   - Click "Create"
   - A popup will appear with your credentials

---

### Step 5: Save Your Credentials

1. **Copy Your Client ID**
   - In the popup, you'll see:
     - **Your Client ID**: Something like `123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com`
     - **Your Client Secret**: Keep this secret and secure
   
2. **Download JSON** (Optional but recommended)
   - Click "Download JSON" to save your credentials
   - Store this file securely (DO NOT commit to git)

3. **Copy Client ID**
   - Copy the **Client ID** (you'll need this for your environment variables)
   - The Client Secret is only needed for backend-to-backend OAuth flows (you may not need it for this project)

---

### Step 6: Update Your Environment Variables

Now that you have your Google Client ID, update your environment variables:

#### Backend (.env)
```env
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE.apps.googleusercontent.com
```

#### Frontend (.env)
```env
VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE.apps.googleusercontent.com
```

#### Railway (Backend Environment Variables)
```
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE.apps.googleusercontent.com
```

#### Cloudflare Pages (Frontend Environment Variables)
```
VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE.apps.googleusercontent.com
```

---

### Step 7: Test Your OAuth Integration

1. **Local Testing**
   - Start your backend: `cd backend && npm run dev`
   - Start your frontend: `cd frontend && npm run dev`
   - Visit http://localhost:5173
   - Try signing in with Google

2. **Production Testing**
   - After deploying to Railway and Cloudflare Pages
   - Visit your production URL: https://bloomtechusa.com
   - Try signing in with Google

---

## Publishing Your App (Moving from Testing to Production)

While your app is in "Testing" mode, only test users can sign in. To allow anyone to sign in:

1. **Go to OAuth Consent Screen**
   - Click "OAuth consent screen" in the left sidebar

2. **Publish App**
   - Click "Publish App"
   - Read the requirements
   - Click "Confirm"

3. **Verification** (if needed)
   - If your app requests sensitive scopes, Google may require verification
   - For basic profile and email scopes, verification is usually not required
   - Follow Google's verification process if prompted

---

## Important Security Notes

### DO NOT expose your Client Secret
- The Client Secret should only be used in backend code
- Never commit it to git
- Never expose it in frontend code
- For this project, you primarily need the Client ID

### Keep credentials secure
- Add `.env` to `.gitignore` (already done in this project)
- Use environment variables for all credentials
- Never hardcode credentials in your source code

### Regularly rotate credentials
- If you suspect your credentials have been compromised, regenerate them
- In Google Cloud Console, go to Credentials → Delete old ones → Create new ones

---

## Troubleshooting

### "redirect_uri_mismatch" Error
**Problem**: The redirect URI in your request doesn't match any authorized redirect URIs.

**Solution**: 
1. Go to Google Cloud Console → Credentials
2. Click on your OAuth 2.0 Client ID
3. Add the exact URI from the error message to "Authorized redirect URIs"
4. Save and try again

### "origin_mismatch" Error
**Problem**: The origin in your request doesn't match any authorized JavaScript origins.

**Solution**: 
1. Go to Google Cloud Console → Credentials
2. Click on your OAuth 2.0 Client ID
3. Add the exact origin from the error message to "Authorized JavaScript origins"
4. Make sure there's no trailing slash
5. Save and try again

### "Access blocked: This app's request is invalid"
**Problem**: OAuth consent screen is not properly configured.

**Solution**: 
1. Complete all required fields in OAuth consent screen
2. Make sure app is published (or add yourself as a test user)
3. Ensure required scopes are added

### "idpiframe_initialization_failed" Error
**Problem**: Third-party cookies are blocked in the browser.

**Solution**: 
1. This is a browser security feature
2. Users need to enable third-party cookies for Google OAuth
3. Or use the popup sign-in method instead of one-tap

---

## Additional Resources

- **Google OAuth Documentation**: https://developers.google.com/identity/protocols/oauth2
- **Google Sign-In for Websites**: https://developers.google.com/identity/sign-in/web
- **OAuth 2.0 Scopes**: https://developers.google.com/identity/protocols/oauth2/scopes
- **Google Cloud Console**: https://console.cloud.google.com/

---

## Quick Reference

### Your Configuration
- **Domain**: bloomtechusa.com
- **Cloudflare Pages**: your-project-name.pages.dev
- **Railway Backend**: your-backend.railway.app

### Authorized JavaScript Origins
```
http://localhost:5173
http://localhost:5174
https://bloomtechusa.com
https://www.bloomtechusa.com
https://bloomtechusa.pages.dev
https://your-project-name.pages.dev
```

### Authorized Redirect URIs
```
http://localhost:5173
http://localhost:5174
https://bloomtechusa.com
https://www.bloomtechusa.com
https://bloomtechusa.pages.dev
https://your-project-name.pages.dev
```

---

## Next Steps

After completing this setup:

1. ✅ Copy your Google Client ID
2. ✅ Update environment variables in Railway (backend)
3. ✅ Update environment variables in Cloudflare Pages (frontend)
4. ✅ Update local `.env` files for development
5. ✅ Test Google Sign-In locally
6. ✅ Deploy and test in production
7. ✅ Publish your app (move from Testing to Production)

---

**Congratulations!** 🎉 You've successfully set up Google OAuth for your BloomTechUSA application!
