# Slar Chargo — slarcargo.com

Static marketing site for a Dubai cargo & customs-clearance company, converted
1:1 from the Claude Design project (`.dc.html` component files) into plain,
deployable HTML/CSS/JS — no build step, no runtime dependency. SEO + AI/LLM
discoverability layered on top of the original design.

## Pages
| File | Source design | Notes |
|------|---------------|-------|
| `index.html` | Home.dc.html | Hero, marquee, coverage circle, disciplines |
| `cargo.html` | Cargo.dc.html | Auto-rotating slider + 7-step process |
| `customs-clearance.html` | CustomClearance.dc.html | Slider + 4 cards + 6-step process |
| `tariff.html` | Tarif.dc.html | Lane/transit tables |
| `about.html` | About.dc.html | Decorative SVGs + clip-path images |
| `faq.html` | FAQ.dc.html | 12-item accordion + FAQPage schema |
| `contact.html` | Contact.dc.html | WhatsApp contact form |
| `quote.html` | Quote.dc.html | WhatsApp quote form |
| `site.css` | — | Base reset + responsive layer + mobile nav |
| `app.js` | support.js (relevant parts) | Icons, mobile nav, sliders, WhatsApp forms |

The Nav and Footer (which were `dc-import` components) are inlined into every
page, with the active nav item bolded per page. The `{{ }}` template bindings,
`sc-for` loops and `sc-if` conditionals were all resolved to static markup.

## How it was verified
All 8 pages serve HTTP 200, no console errors, Lucide icons render, sliders
cycle, the mobile hamburger opens, and both WhatsApp forms validate and build a
correct `wa.me` deep link.

## ⚠️ Placeholders to replace before launch
- **WhatsApp / phone:** `971500000000` and `+971 50 000 0000` appear in every
  page (footer, WhatsApp float, contact/quote) and in `app.js` (`WHATSAPP` const)
  and `llms.txt`. Search-and-replace all of them with the real number.
- **Email:** `hello@slarchargo.com` — confirm the real address (note the domain
  is `slarchargo.com` in the design but the site domain is `slarcargo.com`).
- **Social links:** Instagram / Facebook / TikTok `href="#"` in nav + footer.
- **Office address:** currently "Jebel Ali Free Zone, Dubai, UAE" — set the exact
  address; also the geo coordinates in the JSON-LD (generic Jebel Ali area now).
- **Stat figures** (98.4% on-time, "128 active shipments", etc.) came from the
  design mockup — confirm or adjust.
- **Images:** the design uses Unsplash stock photos (with graceful hide-on-error).
  Replace with owned photography; add a real `og-cover.jpg` (1200×630) and point
  the `og:image` / `twitter:image` tags at it (they currently use the logo).

## ⚠️ Brand / domain naming
The design consistently uses **"Slar Chargo"** (with an *h*) and the email
`hello@slarchargo.com`, but the deploy domain / folder is **slarcargo.com**
(no *h*). I kept the design's wording verbatim and used `slarcargo.com` for
canonical URLs, sitemap and structured data. Decide which spelling is correct and
align them (brand text, email domain, canonical host) before launch.

## SEO / AI coverage included
- Per-page `<title>`, meta description, targeted keywords, canonical, robots.
- Geo meta (AE-DU) + coordinates; Apple/Safari + theme-color meta.
- Open Graph + Twitter/X cards on every page.
- JSON-LD: Organization + LocalBusiness/MovingCompany + WebSite (home),
  Service + BreadcrumbList (cargo, customs), FAQPage (faq),
  ContactPage/Organization (contact), BreadcrumbList (all inner pages).
- `robots.txt` allowlisting GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
  Applebot-Extended, CCBot, etc.; `sitemap.xml`; `llms.txt` with quotable facts.

## Run locally
```bash
cd "/Users/ziaullah/Usman's websites/slarcargo.com"
python3 -m http.server 4321
# open http://localhost:4321
```

## Recommended next steps
1. Replace the placeholders above (especially phone/email/address).
2. Verify the business in Google Business Profile + Bing Places.
3. Submit `sitemap.xml` in Google Search Console + Bing Webmaster Tools.
4. Swap Unsplash stock for owned imagery and add a proper social share image.
