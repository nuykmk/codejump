gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ['.fv__title', '.fv__subtitle'],
  { x: -150, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2, // 各要素を0.2秒ずらして順に
    scrollTrigger: {
      trigger: '.fv',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.fv__bottom',
  { y: 150, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.fv__bottom',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.news__wrapper',
  { x: 150, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.news__wrapper',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
// 画像：下からフェードイン
gsap.fromTo('.concept__img',
  { y: 80, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.concept__img',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
// タイトルエリア：右からスライドイン＆フェードイン
gsap.fromTo('.concept__title-area',
  { x: 150, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.concept__title-area',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.concept__bottom-right-item',
  { y: 80, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out',
    stagger: 0.3, 
    scrollTrigger: {
      trigger: '.concept__bottom-right-item',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.concept__bottom-left',
  { x: -150, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.concept__bottom-left',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.service__content-title-area',
  { x: -150, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.service__content-title-area',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.service__content-item',
  { y: 80, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out',
    stagger: 0.3, 
    scrollTrigger: {
      trigger: '.service__content-item',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.works__content-title-area',
  { x: 150, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.works__content-title-area',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);
gsap.fromTo('.blog__textarea',
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out',
    stagger: 0.3, 
    scrollTrigger: {
      trigger: '.blog__textarea',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  }
);