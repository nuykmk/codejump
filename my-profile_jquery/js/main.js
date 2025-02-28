$(function () {
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: 'linear',
  });

  $('.mouseover').on('mouseover', function () {
    $(this).animate(
      {
        opacity: 0.6,
      },
      100
    );
  });

  $('.mouseover').on('mouseout', function () {
    $(this).animate(
      {
        opacity: 1,
      },
      100
    );
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.page-top').fadeIn();
    } else {
      $('.page-top').fadeOut();
    }
  });

  $('.page-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const targetId = $(this).attr('href');
    const scrollTarget = targetId === '#' ? $('html') : $(targetId);
    const position = scrollTarget.offset().top;
    $('html,body').animate({ scrollTop: position }, 800);
  });

  $(window).on('scroll', function () {
    $('.fade').each(function () {
      var sectionTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (windowBottom > sectionTop + 200) {
        $(this).addClass('fade-in');
      }
    });
  });
});

$(document).ready(function () {
  // 画像クリックでモーダル表示
  $('.work-img').on('click', function () {
    var imgSrc = $(this).attr('src'); // クリックした画像のsrcを取得
    $('.big-img').attr('src', imgSrc); // モーダル内の画像にsrcを設定
    $('.modal').fadeIn(); // モーダルを表示
  });

  // 閉じるボタンをクリックでモーダルを閉じる
  $('.close-btn').on('click', function () {
    $('.modal').fadeOut(); // モーダルを非表示
  });

  // モーダルの外側をクリックでモーダルを閉じる
  $('.modal').on('click', function (e) {
    if ($(e.target).is('.modal')) {
      $('.modal').fadeOut(); // モーダルを非表示
    }
  });
});
