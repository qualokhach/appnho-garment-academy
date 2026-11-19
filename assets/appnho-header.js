/* AppNho — header gọn khi cuộn (bản máy tính).
   Thêm/bỏ class "appnho-compact" trên <html> theo vị trí cuộn; giao diện nằm trong appnho-shell.css.
   Có khoảng đệm (64px / 24px) để header không nhấp nháy quanh ngưỡng. */
(function () {
  var root = document.documentElement, ON = 64, OFF = 24, ticking = false;
  function update() {
    ticking = false;
    var y = window.pageYOffset || root.scrollTop || 0;
    if (y > ON) root.classList.add('appnho-compact');
    else if (y < OFF) root.classList.remove('appnho-compact');
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
