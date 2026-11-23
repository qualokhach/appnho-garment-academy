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
