# terenzo.ai

Source for the Terenzo marketing website. Static HTML, deployed on Cloudflare.

- Site files live in `public/`: `index.html` (home), `ai-audit.html`, `faq.html`,
  `about.html`, `styles.css`, `assets/`, `llms.txt`, `robots.txt`, `sitemap.xml`.
- No framework and no build step. Edit the HTML and `styles.css` directly.
- Deploy: Cloudflare Workers Static Assets. `wrangler.jsonc` serves `public/`. Every push to
  `main` redeploys. `terenzo.ai` points here.

See `CLAUDE.md` for conventions (voice, AI-visibility rules, design tokens).

Business and client work lives in a separate private repo.
