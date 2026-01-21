(function () {
  try {
    /* ========= CONFIG ========= */
    // CHỈ CHO PHÉP LAUNCHER ORIGIN CỤ THỂ
    const ALLOW_ORIGIN = [
      'https://1617play.com',              // nếu có web
      'capacitor://localhost',             // app Android/iOS
      'ionic://localhost',
      'file://'
    ];

    /* ========= ENV ========= */
    const protocol = location.protocol;
    const ref = document.referrer || '';
    const origin = location.origin || '';

    const isApp =
      protocol === 'capacitor:' ||
      protocol === 'ionic:' ||
      protocol === 'file:';

    /* ========= RULE ========= */

    // ✅ APP LUÔN ĐƯỢC PHÉP
    if (isApp) return;

    // ❌ BROWSER: KHÔNG CHO MỞ TRỰC TIẾP GITHUB
    // Chỉ cho phép nếu referrer BẮT ĐẦU BẰNG origin launcher
    const allowed = ALLOW_ORIGIN.some(o => ref.startsWith(o));

    if (!allowed) {
      block();
      return;
    }

    function block() {
      document.documentElement.innerHTML = '';
      document.body.innerHTML = '';
      document.body.style.background = '#000';
      throw new Error('Blocked by 1617Play Guard');
    }

  } catch (e) {
    document.body.innerHTML = '';
  }
})();
