/* AppNho Garment Academy — ads + right column.
   1) DESKTOP (>=1320px): builds the right column #appnho-side (content panel on top, 3 empty banner slots at the bottom).
      Paste the Monetag In-Page Push tag where marked below (max 3 banners are shown; set the count in the Monetag dashboard).
   2) MOBILE  (<=820px): paste the single banner tag into #appnho-ad-top where marked below. */
(function () {
  'use strict';
  var isMobile = window.matchMedia('(max-width: 820px)').matches;
  if (isMobile) {
    // PASTE MOBILE TOP BANNER CODE HERE (renders inside #appnho-ad-top)
  } else {
    // Monetag In-Page Push (zone 12297676). Same snippet as supplied, appended once to <body>.
    // Banner count/position are set in the Monetag dashboard; the right column keeps 3 slots free for it.
    // The matching service worker (zone 12297653) is /sw.js at the site root.
    if (!window.__appnhoMonetag) {
      window.__appnhoMonetag = 1;
      (function (s) { s.dataset.zone = '12297676'; s.src = 'https://nap5k.com/tag.min.js'; })
        ([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
    }
  }

  var path = location.pathname.replace(/\/+$/, '');
  var file = decodeURIComponent(path.split('/').pop() || 'index.html');
  var inP6 = /\/phase6\//.test(location.pathname);
  var root = inP6 ? '../' : '';

  var PHASES = [
    ['Phase3_Textile_Technology.html', 'Phase 3', 'Công nghệ dệt may', 'Textile technology'],
    ['Phase4_Fiber_Yarn.html', 'Phase 4', 'Xơ và sợi', 'Fibers and yarns'],
    ['Phase5_Dyeing_Printing_Finishing.html', 'Phase 5', 'Nhuộm, in và hoàn tất', 'Dyeing, printing and finishing'],
    ['Phase6_Garment_Construction.html', 'Phase 6', 'Cấu tạo sản phẩm may mặc', 'Garment construction'],
    ['Phase7_Sewing_Machines.html', 'Phase 7', 'Máy móc ngành may', 'Sewing machines'],
    ['Phase8_Cutting_and_Preproduction.html', 'Phase 8', 'Cắt và chuẩn bị sản xuất', 'Cutting and pre-production'],
    ['Phase9_Sewing_Production_Management.html', 'Phase 9', 'Quản lý sản xuất may', 'Sewing production management'],
    ['Phase10_Quality_Management.html', 'Phase 10', 'Quản lý chất lượng', 'Quality management'],
    ['Phase11_Merchandising_Supply_Chain.html', 'Phase 11', 'Merchandising và chuỗi cung ứng', 'Merchandising and supply chain'],
    ['Phase12_Factory_Management.html', 'Phase 12', 'Quản lý nhà máy', 'Factory management'],
    ['Phase13_Advanced_Materials.html', 'Phase 13', 'Vật liệu nâng cao', 'Advanced materials'],
    ['Phase14_Advanced_Finishing_Printing_Embroidery.html', 'Phase 14', 'Hoàn tất, in và thêu nâng cao', 'Advanced finishing, printing and embroidery'],
    ['Phase15_Textile_Testing_Laboratory.html', 'Phase 15', 'Phòng thí nghiệm kiểm nghiệm', 'Textile testing laboratory'],
    ['Phase16_Fashion_Design_Product_Development.html', 'Phase 16', 'Thiết kế và phát triển sản phẩm', 'Design and product development'],
    ['Phase17_Specialized_Garments.html', 'Phase 17', 'Trang phục chuyên dụng', 'Specialized garments'],
    ['Phase18_Automation_Advanced_Manufacturing.html', 'Phase 18', 'Tự động hóa sản xuất', 'Automation in manufacturing'],
    ['Phase19_Supply_Chain_Trade.html', 'Phase 19', 'Chuỗi cung ứng và thương mại', 'Supply chain and trade'],
    ['Phase20_Digital_Transformation_Data_Governance.html', 'Phase 20', 'Chuyển đổi số và dữ liệu', 'Digital transformation and data']
  ];
  var P6 = [
    ['nen-tang', 'Nền tảng cấu tạo', 'Construction basics'], ['ao-thun', 'Áo thun', 'T-shirt'],
    ['ao-polo', 'Áo polo', 'Polo shirt'], ['ao-so-mi', 'Áo sơ mi', 'Dress shirt'],
    ['ao-khoac', 'Áo khoác', 'Jacket'], ['quan', 'Quần', 'Trousers'], ['denim', 'Denim và jeans', 'Denim and jeans'],
    ['vay', 'Váy', 'Skirt'], ['dam', 'Đầm', 'Dress'], ['do-lot', 'Đồ lót', 'Underwear'],
    ['the-thao', 'Đồ thể thao', 'Sportswear'], ['bao-ho', 'Đồ bảo hộ', 'Protective wear'],
    ['ky-thuat-may', 'Kỹ thuật may', 'Sewing techniques'], ['phat-trien-san-pham', 'Phát triển sản phẩm', 'Product development'],
    ['hoan-thien', 'Hoàn thiện', 'Finishing'], ['san-xuat', 'Sản xuất', 'Production'], ['chat-luong', 'Chất lượng', 'Quality']
  ];
  var T = {
    outline: ['Trên trang này', 'On this page'], next: ['Học tiếp', 'Keep learning'],
    quick: ['Liên kết nhanh', 'Quick links'], home: ['Trang chủ Garment Academy', 'Garment Academy home'],
    dict: ['Từ điển Anh – Việt – Trung', 'English – Vietnamese – Chinese dictionary'],
    p6idx: ['Tất cả sản phẩm may mặc', 'All garment types'], prev: ['Trước', 'Previous'], nxt: ['Tiếp theo', 'Next'],
    label: ['Bảng điều hướng và khu vực quảng cáo', 'Navigation and advertising column'], phases: ['Các Phase', 'All phases']
  };
  function lang() {
    try { if (window.AppNhoI18n && AppNhoI18n.getLanguage) return AppNhoI18n.getLanguage() === 'en' ? 1 : 0; } catch (e) {}
    try { return localStorage.getItem('appnho_garment_language') === 'en' ? 1 : 0; } catch (e) {}
    return 0;
  }
  function t(k) { return T[k][lang()]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function li(href, title, small, cur) {
    return '<li' + (cur ? ' class="is-current"' : '') + '><a href="' + href + '">' + esc(title) + (small ? '<small>' + esc(small) + '</small>' : '') + '</a></li>';
  }

  var side, panel, auto, tocSig = '';
  function headings() {
    var out = [], seen = {};
    var nodes = document.querySelectorAll('main h2, .container h2, article h2, section h2');
    if (!nodes.length) nodes = document.querySelectorAll('h2');
    for (var i = 0; i < nodes.length && out.length < 12; i++) {
      var h = nodes[i];
      if (h.closest('footer, nav, #appnho-side, #appnho-language-switch') || !h.offsetParent) continue;
      var txt = (h.textContent || '').replace(/\s+/g, ' ').trim();
      if (!txt || txt.length > 90 || seen[txt]) continue;
      seen[txt] = 1;
      if (!h.id) h.id = 'sec-' + (i + 1);
      out.push([h.id, txt]);
    }
    return out;
  }
  function related() {
    var rows = '', idx;
    if (inP6) {
      var slug = file.replace(/\.html$/, '');
      idx = -1;
      for (var i = 0; i < P6.length; i++) if (P6[i][0] === slug) idx = i;
      rows += li('../Phase6_Garment_Construction.html', t('p6idx'), 'Phase 6');
      if (idx > 0) rows += li(P6[idx - 1][0] + '.html', P6[idx - 1][lang() + 1], t('prev'));
      if (idx > -1 && idx < P6.length - 1) rows += li(P6[idx + 1][0] + '.html', P6[idx + 1][lang() + 1], t('nxt'));
      return rows;
    }
    idx = -1;
    for (var j = 0; j < PHASES.length; j++) if (PHASES[j][0] === file) idx = j;
    if (file === 'Woven_Fabric_Technology.html') {
      rows += li('Phase3_Textile_Technology.html', PHASES[0][lang() + 2], PHASES[0][1]);
      rows += li('Phase4_Fiber_Yarn.html', PHASES[1][lang() + 2], PHASES[1][1]);
      return rows;
    }
    if (idx > 0) rows += li(PHASES[idx - 1][0], PHASES[idx - 1][lang() + 2], t('prev') + ' · ' + PHASES[idx - 1][1]);
    if (idx > -1 && idx < PHASES.length - 1) rows += li(PHASES[idx + 1][0], PHASES[idx + 1][lang() + 2], t('nxt') + ' · ' + PHASES[idx + 1][1]);
    return rows;
  }
  function build() {
    if (!panel || !auto) return;
    var hs = headings(), html = '';
    var sig = lang() + '|' + hs.map(function (h) { return h[0] + h[1]; }).join('~');
    if (sig === tocSig) return;
    tocSig = sig;
    if (hs.length >= 2) {
      html += '<section><h4>' + t('outline') + '</h4><ul>' + hs.map(function (h) {
        return '<li><a href="#' + esc(h[0]) + '">' + esc(h[1]) + '</a></li>';
      }).join('') + '</ul></section>';
    }
    var rel = related();
    if (rel) html += '<section><h4>' + t('next') + '</h4><ul>' + rel + '</ul></section>';
    html += '<section><h4>' + t('quick') + '</h4><ul>' +
      li(root + 'index.html', t('home')) + li(root + 'index.html?section=dictionary', t('dict')) + '</ul></section>';
    auto.innerHTML = html;
  }
  function init() {
    if (window.matchMedia('(max-width: 1319px)').matches || document.getElementById('appnho-side')) return;
    side = document.createElement('aside');
    side.id = 'appnho-side';
    side.setAttribute('role', 'complementary');
    panel = document.createElement('nav');
    panel.className = 'appnho-side-panel';
    var slots = document.createElement('div');
    slots.className = 'appnho-side-slots';
    slots.setAttribute('aria-hidden', 'true');
    slots.innerHTML = '<div data-slot="1"></div><div data-slot="2"></div><div data-slot="3"></div>';
    // Pages that have their own left menu (index): move that very node into the right column so the
    // left side is all content. The menu scrolls inside the column when it is taller than the space.
    var menu = document.querySelector('.layout > aside.side, nav#nav, aside.ga-chapter-nav, aside.phase09-reader-nav, aside.category-side');
    if (menu) {
      if (menu.parentElement) menu.parentElement.classList.add('appnho-menu-parent');
      menu.classList.add('appnho-moved-menu');
      panel.appendChild(menu); document.documentElement.classList.add('side-moved');
    }
    auto = document.createElement('div');
    auto.className = 'appnho-side-auto';
    if (!menu) panel.appendChild(auto);
    side.appendChild(panel); side.appendChild(slots);
    document.body.appendChild(side);
    document.documentElement.classList.add('has-ad-side');
    function label() { panel.setAttribute('aria-label', t('label')); }
    label(); build();
    window.addEventListener('appnho:languagechange', function () { tocSig = ''; label(); setTimeout(build, 60); setTimeout(build, 700); });
    setTimeout(build, 500); setTimeout(build, 1500);
    var main = document.querySelector('main') || document.body, timer;
    new MutationObserver(function () { clearTimeout(timer); timer = setTimeout(build, 400); })
      .observe(main, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
