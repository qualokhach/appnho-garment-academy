# Bilingual (VI/EN) fixes

- `bilingual.js`: fixed infinite loop that froze Phase 11; page renderers now resync with the saved language on load.
- `assets/appnho-shell-i18n.js` (new, loaded on every page): one shared translation of header, footer, breadcrumb, academy nav, aria-labels and page titles.
- `i18n/*.en.js` (new): English strings for static blocks (Phase 14–20 and all `phase6/*` pages), keyed via `data-i18n` / `data-i18n-html`.
- Phase 13 / 17: EN dictionaries were never registered with the runtime — now registered.
- Phase 15: added the 25 missing English lessons (31–55), removed stray duplicated script text shown on the page.
- Phase 16: EN data was read before it loaded — now lazy.
- Phase 18 / 19 / 20: removed page-local language switches, now follow the site-wide VI/EN switch; fixed English text showing in VI mode and `categoryNotes` error.
- SVG arrows in Phase 12 / 17 diagrams had paths missing the `M` command — fixed.
- Phase 12: lesson categories now translated.

# Ad layout (space only, no ad code yet)

- `assets/appnho-ads.css` / `assets/appnho-ads.js` (new, on every page); paste Monetag snippets into `appnho-ads.js`.
- Desktop (>= 821px): `#appnho-ad-inpage-push` marks the bottom-right zone (380x340) for up to 3 in-page push banners. The language switch moved to bottom-left (`bilingual.css`).
- Mobile (<= 820px): `#appnho-ad-top` reserves a 62px banner slot at the very top; the whole site starts below it.

## Ad layout (right column) + Monetag
- Desktop >=1366px: permanent right column `#appnho-side` (352px, full window height). The whole site is pushed left.
  - Top: panel built by assets/appnho-ads.js. Pages with their own left menu (index, Phase 3-5, 9, 11-20, phase6/*) have that menu MOVED here (same DOM node, scrolls inside the column); other pages get a page outline + previous/next + quick links.
  - Bottom: 3 blank banner slots for Monetag In-Page Push.
- Monetag: In-Page Push tag (zone 12297676) is loaded from assets/appnho-ads.js on desktop (>=821px). Service worker `sw.js` (zone 12297653) must stay at the site ROOT (https://garment.appnho.io.vn/sw.js).
- Mobile <=820px: 62px slot `#appnho-ad-top` at the very top; paste that banner's code in assets/appnho-ads.js (mobile branch).
- 821-1365px: no column; banners float bottom-right.
