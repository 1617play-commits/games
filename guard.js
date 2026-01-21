(function () {
  try {
    /* ========= CONFIG ========= */
    const ALLOW_REFERRER = [
      '1617play',          // domain / brand
      'localhost'
    ];

    /* ========= ENV ========= */
    const ref = document.referrer || '';
    const protocol = location.protocol;

    const isApp =
      protocol === 'capacitor:' ||
      protocol === 'ionic:' ||
      protocol === 'file:';

    const hasReferrer = ref.length > 0;
    const isAllowedReferrer = ALLOW_REFERRER.some(d => ref.includes(d));

    /* ========= RULE ========= */
    /**
     * CHO PHÉP:
     * - Chạy trong APP
     * - Chạy từ launcher 1617Play (CÓ referrer hợp lệ)
     *
     * CHẶN:
     * - Mở trực tiếp link (KHÔNG referrer)
     * - Nhúng iframe từ nơi khác
     */
    if (!isApp) {
      // ❌ Mở trực tiếp link → CHẶN
      if (!hasReferrer) {
        block();
        return;
      }

      // ❌ Có referrer nhưng không phải của mình → CHẶN
      if (!isAllowedReferrer) {
        block();
        return;
      }
    }

    // PASS
    // console.log('1617Play Guard: OK');

    function block() {
      document.documentElement.innerHTML = '';
      document.body.innerHTML = '';
      document.body.style.background = '#000';
      throw new Error('Blocked by 1617Play Guard');
    }

  } catch (e) {
    // Fail-safe
    document.body.innerHTML = '';
  }
})();
