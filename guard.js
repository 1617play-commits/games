(function () {
  try {
    /* ========= CONFIG ========= */
    const ALLOW_REFERRER = [
      '1617play',          // web / app domain
      'localhost',         // dev
    ];

    /* ========= ENV DETECT ========= */
    const ref = document.referrer || '';
    const isIframe = window.top !== window.self;
    const protocol = location.protocol;

    // App WebView (Capacitor / Cordova)
    const isApp =
      protocol === 'capacitor:' ||
      protocol === 'ionic:' ||
      protocol === 'file:';

    // Referrer hợp lệ
    const isAllowedReferrer = ALLOW_REFERRER.some(d =>
      ref.includes(d)
    );

    /* ========= RULE ========= */
    /**
     * CHO PHÉP nếu:
     * 1. Chạy trong App
     * 2. Hoặc được mở từ launcher 1617Play
     *
     * CHẶN nếu:
     * - Iframe từ nguồn khác
     * - Mở trực tiếp link game trên browser
     */
    if (!isApp) {
      // Không phải app → phải có referrer hợp lệ
      if (!isAllowedReferrer) {
        block();
        return;
      }

      // Có referrer nhưng bị iframe từ nơi khác
      if (isIframe && !isAllowedReferrer) {
        block();
        return;
      }
    }

    /* ========= PASS ========= */
    // console.log('1617Play guard: OK');

    function block() {
      document.documentElement.innerHTML = '';
      document.body.innerHTML = '';
      document.body.style.background = '#000';
      throw new Error('Blocked by 1617Play Guard');
    }
  } catch (e) {
    // Fail-safe: nếu guard lỗi → vẫn chặn
    document.body.innerHTML = '';
  }
})();
