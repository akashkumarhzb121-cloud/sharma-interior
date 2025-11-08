# Sharma Interior — Frontend

This is a Vite + React + TailwindCSS single-page site for Sharma Interior & Decoration.

What I changed to make the project buildable and deployable

- Added `index.html` at project root (Vite expects it).
- Fixed package.json dependencies and added `@vitejs/plugin-react`.
- Added `vite.config.js` and `postcss.config.js` (ESM-compatible).
- Fixed imports (`src/main.jsx` -> imports `./app.jsx` which matches file name).
- Created `vercel.json` to instruct Vercel to run `npm run build` and serve `dist/`.

Local development

1. Install dependencies:

```powershell
cd 'C:\sharma interior'
npm install
```

2. Run dev server:

```powershell
npm run dev
```

It will open a local server (Vite) and show the local URL in the terminal.

Production build (locally)

```powershell
npm run build
```

That will create a `dist/` folder that contains `index.html` and the assets.

Deploying to GitHub + Vercel

Option A — Deploy via Vercel Web UI (recommended):

1. Commit & push this repository to GitHub.
2. Go to https://vercel.com/new and import your GitHub repo.
3. For Project Settings set:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy — Vercel will run the build and publish the `dist/` files.

Option B — Deploy via Vercel CLI:

```powershell
npm i -g vercel
vercel login
# from project root
vercel --prod
```

Useful git commands (run in PowerShell):

```powershell
cd 'C:\sharma interior'
# initialize repo (if not yet a git repo)
git init
git branch -M main
git add .
git commit -m "chore: prepare project for Vercel deployment"
# add your remote (replace with your repo URL):
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If you want, paste your repository URL and I can give the exact commands to run.

If Vercel still shows 404 after successful build:

- Check Vercel build logs (they should show `npm run build` and `Build completed`).
- Ensure Output Directory is `dist`.
- Confirm `dist/index.html` exists in the build artifacts.

If you'd like, I can also add a small `vercel` script to `package.json` or create a GitHub Action, but it's optional.

---

If you want me to push the changes and deploy I need the remote repo or Vercel access — I cannot push to your GitHub or trigger your Vercel deploy without your credentials. I can run the remaining local git commands for you (initializing and committing) if you'd like — or you can run the exact commands above.
