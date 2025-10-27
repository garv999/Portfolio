# Portfolio

Open
- Open locally: http://localhost:5173/
- Open on LAN (same network): http://10.12.50.71:5173/
- Repository: https://github.com/garv999/Portfolio

Quick start

```bash
# install dependencies
npm install

# run dev server (local)
npm run dev

# run dev server and expose on LAN (other devices on same network)
npm run dev -- --host

# build for production
npm run build

# preview production build locally
npm run preview
```

Notes
- If you want the "Download Resume" button to download without a Google Drive prompt, add the PDF to `public/` and link to it (I can help).
- To expose the site publicly (anyone on the internet), use a tunnel such as `ngrok`:

```bash
# example (requires ngrok installed)
npx ngrok http 5173
```

If you want, I can add a GitHub Action to run the typecheck and lint on pull requests, or help deploy this site to Vercel/Netlify/GitHub Pages.

---
Created and pushed from local development environment.
