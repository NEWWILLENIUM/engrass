# Enggrass Lofts Website Guide

## What happens to images?
This project can **auto-mirror remote image links** into the site during build.

- Edit `image-sources.json` to add/replace Pasteboard (or other direct) image URLs.
- On every build, `npm run build` runs `scripts/mirror-images.mjs` first (via `prebuild`).
  - Downloads images into `/renderings` and `/history`
  - Generates `components/imageManifest.ts` so pages render the new images automatically

## 1. Fix "npm is not recognized"
If you see this error, you need to install Node.js.

1.  **Download:** Go to [nodejs.org](https://nodejs.org/) and download the "LTS" version.
2.  **Install:** Run the installer.
3.  **Restart:** Restart your terminal or computer.

## 2. Build the Site
1.  Open your terminal in this project folder.
2.  Run `npm install` (Wait for it to finish).
3.  Run `npm run build`.

## 3. Go Live
1.  Locate the new **`dist`** folder created by the build command.
2.  Drag and drop that folder into [Netlify Drop](https://app.netlify.com/drop).

## 4. One-click deploy (recommended)

### Option A: Vercel (GitHub → auto deploy)
1. Create a GitHub repo and push this project.
2. In Vercel, click **New Project** and import your repo.
3. When prompted:
   - Build command: `npm run build`
   - Output folder: `dist`
4. Click **Deploy**.

Every time you push to GitHub, Vercel will redeploy automatically.

### Option B: Netlify (GitHub → auto deploy)
1. Create a GitHub repo and push this project.
2. In Netlify, **Add new site → Import from Git**.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`


