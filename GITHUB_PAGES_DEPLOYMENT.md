# GitHub Pages Deployment Guide

## 🚀 Deploy to GitHub Pages in 5 Minutes

### Step 1: Update Next.js Configuration

Edit `next.config.js` to enable static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: '/my-porfolio',
  assetPrefix: '/my-porfolio/',
};

module.exports = nextConfig;
```

**Note**: If you use a custom domain, remove the `basePath` and `assetPrefix` lines.

### Step 2: Build the Project

```bash
npm run build
```

This creates a `.next` folder with all static files.

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Build static site for GitHub Pages"
git push origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository: https://github.com/DonnieDesu/my-porfolio
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/ (root)**
7. Click **Save**

### Step 5: Wait for Deployment

- GitHub will automatically build and deploy
- Wait 1-2 minutes
- Your site will be available at: **https://donniedesu.github.io/my-porfolio/**

## ✅ Verify Deployment

1. Check the **Actions** tab in your repository
2. Look for the deployment workflow
3. Once it shows a green checkmark ✅, your site is live!

## 🔗 Share Your Portfolio

- **Live URL**: https://donniedesu.github.io/my-porfolio/
- Share this with recruiters!
- It will auto-update whenever you push to main

## 🎯 Optional: Use Custom Domain

If you have a custom domain (like donpiedro.com):

1. Go to your domain registrar
2. Add a CNAME record pointing to: `donniedesu.github.io`
3. In GitHub Pages settings, add your custom domain
4. GitHub automatically handles HTTPS

## ⚡ Auto-Deploy on Every Push

GitHub Pages automatically redeploys when you push to `main`. Just:

```bash
# Make changes
npm run build
git add .
git commit -m "Update portfolio"
git push origin main
```

Your site updates in 1-2 minutes! 🚀

## 🆘 Troubleshooting

### Site shows 404
- Wait 2-3 minutes
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check that `basePath` matches your repo name in `next.config.js`

### Links not working
- Verify `basePath: '/my-porfolio'` in `next.config.js`
- Rebuild and push again

### Build fails
- Check GitHub Actions logs
- Run `npm run build` locally to debug
- Fix errors and push again

---

**Your portfolio is now live on GitHub Pages!** 🎉
