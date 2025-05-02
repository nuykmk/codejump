// ----------------------------------
// works swiper
// ----------------------------------


const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 3000, // 3秒ごとにスライド
    disableOnInteraction: false, // ユーザー操作後も自動スライド継続
  },
  speed: 800, // ←★ここに追加（ミリ秒単位なので800＝0.8秒）
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // レスポンシブ対応: 幅が小さい場合にスライド数を変更
    768: {
      slidesPerView: 1, // 画面が小さくなったら1枚表示
    },
    1024: {
      slidesPerView: 2, // 画面が中程度の場合に2枚表示
    },
  }
  
});
