(function(){
  'use strict';
  var map = {
  "TRANG CHỦ": "HOME",
  "🛠️ ỨNG DỤNG": "🛠️ APPS",
  "🛠️ ỨNG DỤNG ": "🛠️ APPS ",
  "Khám phá Apps": "Explore Apps",
  "🎮 TRÒ CHƠI": "🎮 GAMES",
  "🎮 TRÒ CHƠI ": "🎮 GAMES ",
  "Khu trò chơi": "Game Hub",
  "🧰 CÔNG CỤ": "🧰 TOOLS",
  "🧰 CÔNG CỤ ": "🧰 TOOLS ",
  "Khám phá Công cụ": "Explore Tools",
  "✨ AI ": "✨ AI ",
  "Khu AI": "AI Hub",
  "🎟️ XỔ SỐ": "🎟️ LOTTERY",
  "🛍️ ĐI CHỢ": "🛍️ SHOP",
  "📰 TIN TỨC": "📰 NEWS",
  "📚 HỌC VIỆN MAY MẶC": "📚 GARMENT ACADEMY",
  "← Thư viện Garment Academy": "← Garment Academy Library",
  "THƯ VIỆN KIẾN THỨC DỆT MAY": "GARMENT & TEXTILE KNOWLEDGE LIBRARY",
  "Vật liệu & dệt": "Materials & Textiles",
  "Thiết kế & sản phẩm": "Design & Product",
  "Sản xuất": "Production",
  "Chất lượng": "Quality",
  "Quản trị & thương mại": "Management & Trade",
  "Từ điển": "Dictionary",
  "Cấu tạo sản phẩm may mặc": "Garment Product Construction",
  "Cấu tạo sản phẩm may mặc ": "Garment Product Construction ",
  "từ vật liệu đến chuyền sản xuất": "From Materials to the Production Line",
  "Học cách đọc cấu trúc áo, quần, váy, đầm, áo khoác và đồ chuyên dụng; hiểu vì sao chọn vật liệu, đường may và trình tự lắp ráp như vậy; biết kiểm tra và truy nguyên lỗi.": "Learn to read the construction of shirts, trousers, skirts, dresses, jackets, and specialized garments. Understand the reasons behind material, seam, and assembly-sequence choices, and learn how to inspect products and trace defects.",
  "Phạm vi chuyên đề:": "Scope of this topic:",
  "GARMENT ACADEMY · THƯ VIỆN KIẾN THỨC": "GARMENT ACADEMY · KNOWLEDGE LIBRARY",
  "Trang này tập trung vào kiến trúc sản phẩm, chi tiết cấu tạo, rập, POM, đường may, trình tự lắp ráp và kiểm tra sản phẩm. Quy trình thiết kế và quản lý phát triển từ brief đến bulk nằm tại": "This page focuses on product architecture, construction details, patterns, points of measure (POM), seams, assembly sequence, and product inspection. The design and development management process from brief to bulk is covered in ",
  "Thiết kế & phát triển sản phẩm": "Fashion Design & Product Development",
  ". Yêu cầu hiệu năng theo nhóm hàng chuyên dụng nằm tại": "Performance requirements for specialized product categories are covered in ",
  "Trang phục chuyên dụng": "Specialized Garments",
  "1 bài học": "1 lesson",
  "2 bài học": "2 lessons",
  "3 bài học": "3 lessons",
  "4 bài học": "4 lessons",
  "Nền tảng": "Fundamentals",
  "Đọc cấu trúc sản phẩm, nhận diện lớp vật liệu, chi tiết, đường ráp và mối liên hệ giữa rập với thành phẩm.": "Read product construction; identify material layers, components, joining lines, and the relationship between patterns and the finished garment.",
  "Áo thun": "T-shirts",
  "Cấu tạo áo T-shirt, lựa chọn vải, rập, đường may, hoàn thiện và kiểm hàng.": "T-shirt construction, fabric selection, patterns, seams, finishing, and quality inspection.",
  "Áo polo": "Polo Shirts",
  "Cấu trúc cổ polo, nẹp, bo, thân áo và trình tự lắp ráp.": "Polo collar, placket, rib components, body panels, and assembly sequence.",
  "Áo sơ mi": "Shirts",
  "Thân áo, cổ, chân cổ, tay, cửa tay, nẹp và yêu cầu cân đối của áo sơ mi dệt thoi.": "Body, collar, collar stand, sleeves, cuffs, placket, and balance requirements for woven shirts.",
  "Quần": "Trousers",
  "Cấu tạo quần dài, quần âu và quần casual; hình học thân, đáy, cạp và cửa quần.": "Construction of long trousers, dress trousers, and casual pants; panel geometry, crotch, waistband, and leg openings.",
  "Denim": "Denim",
  "Cấu trúc jeans, cụm túi, đường may chịu lực, wash và kiểm soát shade.": "Jeans construction, pocket assemblies, load-bearing seams, washing, and shade control.",
  "Váy": "Skirts",
  "Hình học rập, cạp, ly, xếp pli, khóa và cân bằng gấu váy.": "Pattern geometry, waistbands, darts, pleats, closures, and skirt-hem balance.",
  "Đầm": "Dresses",
  "Cấu tạo đầm liền thân, cân bằng cơ thể, độ rủ và trình tự lắp ráp.": "One-piece dress construction, body balance, drape, and assembly sequence.",
  "Áo khoác": "Jackets",
  "Shell, lining, dựng form, khóa, nẹp, cổ/mũ và gia cố.": "Shell, lining, structural interfacing, zippers, plackets, collars/hoods, and reinforcement.",
  "Thể thao": "Sportswear",
  "Vật liệu co giãn, panel, đường may và yêu cầu vận động.": "Stretch materials, panels, seams, and movement requirements.",
  "Đồ lót": "Underwear",
  "Elastic, gusset, cấu trúc nâng đỡ và tiếp xúc da.": "Elastic components, gussets, support structures, and skin contact.",
  "Bảo hộ": "Protective Clothing",
  "Workwear/PPE, cấu trúc theo nguy cơ và giới hạn của tuyên bố hiệu năng.": "Workwear/PPE construction based on identified hazards and the limits of performance claims.",
  "Kỹ thuật may": "Sewing Engineering",
  "Lựa chọn seam, stitch và vật tư theo tải, vật liệu và chức năng.": "Selection of seam types, stitch types, and sewing materials according to load, material, and function.",
  "Phát triển sản phẩm": "Product Development",
  "BOM, tech pack, vòng mẫu và các cổng phê duyệt.": "BOM, tech packs, sample rounds, and approval gates.",
  "Phân loại lỗi, xác định nguyên nhân và kiểm soát theo nhóm sản phẩm.": "Defect classification, cause identification, and product-category-specific controls.",
  "Operation breakdown, trình tự công đoạn và bố trí chuyền.": "Operation breakdown, operation sequence, and line layout.",
  "Hoàn thiện": "Finishing",
  "Đo thành phẩm, kiểm cuối, đóng gói và hồ sơ release.": "Finished-garment measurement, final inspection, packing, and release records.",
  "Mở chuyên mục →": "Open category →",
  "Mỗi thứ một chút. Nhưng đều đáng dùng.": "A little of everything. All worth using.",
  "BẮT ĐẦU": "GET STARTED",
  "Trang chủ": "Home",
  "Ứng dụng": "Apps",
  "Công cụ": "Tools",
  "Trò chơi": "Games",
  "HỌC VIỆN": "ACADEMY",
  "Garment Academy": "Garment Academy",
  "Từ điển Anh – Việt – Trung": "English–Vietnamese–Chinese Dictionary",
  "Chuỗi cung ứng & thương mại": "Supply Chain & Trade",
  "Chuyển đổi số & dữ liệu": "Digital Transformation & Data",
  "APPNHO": "APPNHO",
  "Chính sách bảo mật": "Privacy Policy",
  "Điều khoản sử dụng": "Terms of Use",
  "Liên hệ": "Contact",
  "Về AppNho": "About AppNho",
  "Thông số kỹ thuật cần đối chiếu với tech pack, tiêu chuẩn và yêu cầu đã duyệt của từng sản phẩm.": "Technical specifications must be checked against the tech pack, applicable standards, and approved product requirements."
};
  var records = [];
  var attributeRecords = [];
  function apply(lang){
    records.forEach(function(r){r.node.nodeValue = lang === 'en' ? r.en : r.vi;});
    attributeRecords.forEach(function(r){r.el.setAttribute(r.name, lang === 'en' ? r.en : r.vi);});
    document.documentElement.setAttribute('data-appnho-i18n-ready', 'true');
    if(window.AppNhoI18n && window.AppNhoI18n.setPageReady) window.AppNhoI18n.setPageReady(true);
  }
  function init(){
    var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    var node;
    while((node=walker.nextNode())){
      var source=node.nodeValue; var trimmed=source.trim();
      if(Object.prototype.hasOwnProperty.call(map,trimmed)){
        var leading=source.match(/^\s*/)[0], trailing=source.match(/\s*$/)[0];
        records.push({node:node,vi:source,en:leading+map[trimmed]+trailing});
      }
    }
    var attrs={'aria-label':{'Điều hướng AppNho':'AppNho navigation','Điều hướng trong học viện':'Academy navigation','Sáu nhóm kiến thức':'Six knowledge areas'}};
    document.querySelectorAll('[aria-label]').forEach(function(el){var v=el.getAttribute('aria-label');if(attrs['aria-label'][v]) attributeRecords.push({el:el,name:'aria-label',vi:v,en:attrs['aria-label'][v]});});
    window.addEventListener('appnho:languagechange',function(e){apply(e.detail && e.detail.language || 'vi');});
    apply(window.AppNhoI18n ? window.AppNhoI18n.getLanguage() : (localStorage.getItem('appnho_garment_language')||'vi'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
