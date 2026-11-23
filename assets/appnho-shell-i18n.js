/* AppNho Garment Academy — shared interface translations (header, footer, breadcrumb, academy nav).
   Loaded on every page after bilingual.js. Exact-match, reviewed strings only; original Vietnamese
   text is kept on the element so switching back to VI is lossless.
   Pages can add their own exact-match strings with AppNhoShellI18n.add({ 'Tiếng Việt': 'English' }). */
(function () {
  'use strict';
  var I18N = window.AppNhoI18n;
  if (!I18N) return;

  var SHELL = {
    'TRANG CHỦ': 'HOME',
    'ỨNG DỤNG': 'APPS', 'Khám phá Apps': 'Explore Apps',
    'TRÒ CHƠI': 'GAMES', 'Khu trò chơi': 'Games Hub',
    'CÔNG CỤ': 'TOOLS', 'Khám phá Công cụ': 'Explore Tools',
    'Khu AI': 'AI Hub',
    'XỔ SỐ': 'LOTTERY', 'ĐI CHỢ': 'SHOPPING', 'TIN TỨC': 'NEWS',
    'HỌC VIỆN MAY MẶC': 'GARMENT ACADEMY',
    '← Thư viện Garment Academy': '← Garment Academy Library',
    'THƯ VIỆN KIẾN THỨC DỆT MAY': 'TEXTILE & APPAREL KNOWLEDGE LIBRARY',
    'KNOWLEDGE LIBRARY DỆT MAY': 'TEXTILE & APPAREL KNOWLEDGE LIBRARY',
    'Vật liệu & dệt': 'Materials & Textile Technology',
    'Thiết kế & sản phẩm': 'Design & Product Development',
    'Sản xuất': 'Manufacturing',
    'Chất lượng': 'Quality',
    'Quản trị & thương mại': 'Business & Merchandising',
    'Từ điển': 'Dictionary',
    'Mỗi thứ một chút. Nhưng đều đáng dùng.': 'A little of everything, all of it worth using.',
    'BẮT ĐẦU': 'GET STARTED',
    'Trang chủ': 'Home', 'Ứng dụng': 'Apps', 'Công cụ': 'Tools', 'Trò chơi': 'Games',
    'HỌC VIỆN': 'ACADEMY',
    'Từ điển Anh – Việt – Trung': 'English–Vietnamese–Chinese Dictionary',
    'Chuỗi cung ứng & thương mại': 'Supply Chain & Trade',
    'Chuyển đổi số & dữ liệu': 'Digital Transformation & Data',
    'Chính sách bảo mật': 'Privacy Policy',
    'Điều khoản sử dụng': 'Terms of Use',
    'Liên hệ': 'Contact',
    'Về AppNho': 'About AppNho',
    'Thông số kỹ thuật cần đối chiếu với tech pack, tiêu chuẩn và yêu cầu đã duyệt của từng sản phẩm.':
      'Always check technical specifications against the approved tech pack, the applicable standards and each product’s own requirements.',
    'Tổng quan thư viện': 'Library Overview',
    'Vật liệu & công nghệ dệt': 'Materials & Textile Technology',
    'Thiết kế & phát triển sản phẩm': 'Design & Product Development',
    'Sản xuất & kỹ thuật nhà máy': 'Production & Factory Engineering',
    'Chất lượng & kiểm nghiệm': 'Quality & Testing',
    'Từ điển thuật ngữ': 'Terminology Dictionary',
    'Tra cứu kiến thức dệt may theo sáu nhóm chuyên ngành.': 'Browse textile and apparel knowledge across six subject areas.'
  };
  var ATTRS = {
    'Mở menu': 'Open menu', 'Điều hướng AppNho': 'AppNho navigation',
    'Điều hướng trong học viện': 'Academy navigation', 'Sáu nhóm kiến thức': 'Six knowledge areas',
    'Mục lục chuyên đề': 'Topic index', 'Danh mục bài viết': 'Lesson list',
    'Danh mục bài học': 'Lesson categories', 'Tìm trong chuyên mục này...': 'Search this category…'
  };
  var REGION = '.appnho-global-shell, .library-breadcrumb, .ga-site-header, .appnho-footer';
  var SVGNS = 'http://www.w3.org/2000/svg';
  var dict = Object.create(null), counter = 0, seen = new WeakSet();
  var has = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  var LEAD = /^[\s←-⇿⌀-⯿️‍\u{1F000}-\u{1FFFF}]*/u;
  var TRAIL = /[\s⌀-⯿️]*$/u;

  function split(src) {
    var lead = (src.match(LEAD) || [''])[0], trail = (src.match(TRAIL) || [''])[0];
    var end = Math.max(lead.length, src.length - trail.length);
    return { lead: lead, core: src.slice(lead.length, end).replace(/\s+/g, ' ').trim(), trail: src.slice(end) };
  }
  function lookup(src, map) {
    var p = split(src);
    if (has(map, p.core)) return p.lead + map[p.core] + p.trail;
    var whole = src.replace(/\s+/g, ' ').trim();
    if (has(map, whole)) return (src.match(/^\s*/)[0]) + map[whole] + (src.match(/\s*$/)[0]);
    return null;
  }
  function annotate(root, textMap, attrMap) {
    if (!root) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [], n;
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (t) {
      var p = t.parentElement;
      if (!p || /^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE|OPTION|TEXTAREA)$/.test(p.tagName)) return;
      if (p.closest('[data-i18n],[data-i18n-html],[data-dict-ok]')) return;
      var en = lookup(t.nodeValue, textMap);
      if (en === null) return;
      var key = 'shell.' + (++counter);
      dict[key] = en;
      if (p.namespaceURI === SVGNS) {
        if (p.childNodes.length === 1) p.setAttribute('data-i18n', key);
        else { var ts = document.createElementNS(SVGNS, 'tspan'); ts.setAttribute('data-i18n', key); ts.textContent = t.nodeValue; p.replaceChild(ts, t); }
      } else if (p.childNodes.length === 1) {
        p.setAttribute('data-i18n', key);
      } else {
        var sp = document.createElement('span'); sp.setAttribute('data-i18n', key); sp.textContent = t.nodeValue; p.replaceChild(sp, t);
      }
    });
    (root.querySelectorAll ? [root].concat([].slice.call(root.querySelectorAll('[aria-label],[title],[placeholder],[alt]'))) : []).forEach(function (el) {
      ['aria-label', 'title', 'placeholder', 'alt'].forEach(function (a) {
        var v = el.getAttribute(a);
        if (!v || el.hasAttribute('data-i18n-' + a)) return;
        if (!has(attrMap, v)) return;
        var key = 'shell.' + (++counter);
        dict[key] = attrMap[v];
        el.setAttribute('data-i18n-' + a, key);
      });
    });
  }
  function run(root) {
    document.querySelectorAll(REGION).forEach(function (r) { annotate(r, SHELL, ATTRS); });
    annotate(document.body, {}, ATTRS);
    I18N.register('en', dict);
  }
  var extraText = Object.create(null), extraAttr = Object.create(null);
  function add(textMap, attrMap) {
    Object.assign(extraText, textMap || {}); Object.assign(extraAttr, attrMap || {});
    annotate(document.body, extraText, extraAttr);
    I18N.register('en', dict);
  }
  var GA = 'Garment Academy';
  var TITLES = {
    'index.html': GA + ' | Textile & Apparel Knowledge Library',
    'Phase3_Textile_Technology.html': GA + ' | Phase 3 – Textile Technology',
    'Phase4_Fiber_Yarn.html': GA + ' | Fibres and Yarns',
    'Phase5_Dyeing_Printing_Finishing.html': GA + ' | Dyeing, Printing and Finishing',
    'Phase6_Garment_Construction.html': 'Garment Construction | ' + GA,
    'Phase7_Sewing_Machines.html': GA + ' | Sewing Machines and Equipment',
    'Phase8_Cutting_and_Preproduction.html': GA + ' | Cutting & Pre-production',
    'Phase9_Sewing_Production_Management.html': GA + ' | Phase 9 – Sewing Production Management',
    'Phase10_Quality_Management.html': GA + ' | Phase 10: Quality Management',
    'Phase11_Merchandising_Supply_Chain.html': GA + ' | Phase 11 – Merchandising and Supply Chain',
    'Phase12_Factory_Management.html': GA + ' | Phase 12 – Factory Management',
    'Phase13_Advanced_Materials.html': GA + ' | Advanced Materials and Performance',
    'Phase14_Advanced_Finishing_Printing_Embroidery.html': GA + ' | Phase 14 – Advanced Finishing, Printing and Embroidery',
    'Phase15_Textile_Testing_Laboratory.html': GA + ' | Phase 15 – Textile Testing and Laboratory',
    'Phase16_Fashion_Design_Product_Development.html': GA + ' | Fashion Design and Product Development',
    'Phase17_Specialized_Garments.html': GA + ' | Specialized Garment Manufacturing Technology',
    'Phase18_Automation_Advanced_Manufacturing.html': GA + ' | Phase 18 – Automation and Advanced Manufacturing',
    'Phase19_Supply_Chain_Trade.html': GA + ' | Phase 19 – Supply Chain, Trade and Logistics',
    'Phase20_Digital_Transformation_Data_Governance.html': GA + ' | Phase 20 – Digital Transformation and Data Governance',
    'Woven_Fabric_Technology.html': 'Woven Fabric Technology | ' + GA
  };
  var P6 = { 'ao-khoac': 'Jackets & Outerwear', 'ao-polo': 'Polo Shirts', 'ao-so-mi': 'Shirts', 'ao-thun': 'T-Shirts',
    'bao-ho': 'Protective Wear', 'chat-luong': 'Quality', 'dam': 'Dresses', 'denim': 'Denim', 'do-lot': 'Underwear & Intimates',
    'hoan-thien': 'Finishing', 'ky-thuat-may': 'Sewing Techniques', 'nen-tang': 'Fundamentals',
    'phat-trien-san-pham': 'Product Development', 'quan': 'Trousers', 'san-xuat': 'Production', 'the-thao': 'Sportswear', 'vay': 'Skirts' };
  var viTitle = document.title;
  function enTitle() {
    var path = location.pathname.replace(/\/+$/, ''), file = path.split('/').pop() || 'index.html';
    if (/\/phase6\/[^/]+\.html$/.test(path)) {
      var name = P6[file.replace('.html', '')];
      return name ? name + ' | Garment Construction – ' + GA : null;
    }
    return TITLES[file] || (path === '' ? TITLES['index.html'] : null);
  }
  function setTitle() {
    var en = enTitle();
    if (!en) return;
    var next = I18N.getLanguage() === 'en' ? en : viTitle;
    if (document.title !== next) document.title = next;
  }
  function init() {
    run();
    if (window.MutationObserver) {
      var busy = false;
      new MutationObserver(function (ms) {
        if (busy) return;
        var hit = false;
        ms.forEach(function (m) { m.addedNodes.forEach(function (nd) { if (nd.nodeType === 1 && !(nd.hasAttribute && nd.hasAttribute('data-i18n')) && nd.closest && nd.closest(REGION)) hit = true; }); });
        if (!hit) return;
        busy = true; run(); busy = false;
      }).observe(document.body, { childList: true, subtree: true });
    }
    setTitle();
    window.addEventListener('appnho:languagechange', setTitle);
  }
  window.AppNhoShellI18n = { add: add, run: run, setTitle: setTitle };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
