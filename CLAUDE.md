# terenzo.ai — website

The public marketing site for **Terenzo**, an AI and technology operations consulting firm
for mid-market companies (200 to 2000 employees), selling to CFOs and COOs. This repo is
public. Business and client work lives in a separate private repo.

## How it is built
- Plain static HTML plus one shared `styles.css`. No framework, no build step, no JavaScript
  for content. Answer engines read static HTML, so content stays in the HTML.
- Brand tokens (the Ligurian palette, Hanken Grotesk) are mirrored into `styles.css` from the
  Terenzo design system. Deep Teal `#0B4F6C` primary, Sea Green `#4EA699` accent, off-white
  page, terracotta used sparingly as the one warm accent.
- The battlement mark (`assets/terenzo-mark.svg`) is the only brand glyph. No UI icons.

## Writing rules (Drew's voice)
- No em dashes. Use a comma, a colon, or a full stop.
- No emojis.
- Short, sharp sentences. No buzzwords or filler. Calm authority.
- Numbers over adjectives. Never fabricate client results.

## AI visibility (AEO), non-negotiable
- One `h1` per page. The answer goes in the first paragraph under each heading.
- The homepage states the positioning claim, naming the ICP (mid-market, 200 to 2000, CFO,
  COO), within the first 100 words.
- Schema.org JSON-LD on every page: `ProfessionalService`, `Service`, `FAQPage`, `Person`.
- Keep `llms.txt`, `robots.txt` (AI crawlers allowed), and `sitemap.xml` current on every
  content change.

## Deploy
Cloudflare Pages, connected to this repo. Framework preset None, no build command, output
directory is the repo root. Push to `main` to deploy.
