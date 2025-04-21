export default function swiper() {
  const mainSwiper = new Swiper('.swiper.main', {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 1,
      stretch: 200,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.main',
      prevEl: '.swiper-button-prev.main',
    },
    pagination: {
      el: '.swiper-pagination.main',
    },
  });

  const relatedSwiper = new Swiper('.swiper.related', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 1,
      stretch: 200,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.main',
      prevEl: '.swiper-button-prev.main',
    },
    pagination: {
      el: '.swiper-pagination.main',
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const menuSwiper = new Swiper('.swiper.menu', {
    loop: true,
    slidesPerView: 1,  
    navigation: {
      nextEl: '.swiper-button-next.menu',
      prevEl: '.swiper-button-prev.menu',
    },
    breakpoints: {
      1000: {
        slidesPerView: 2,
      },
    },
  });

  const foodSwiper = new Swiper('.swiper.food', {
    loop: true,
    slidesPerView: 1,  
    pagination: {
      el: '.swiper-pagination.food',
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const factsSwiper = new Swiper('.swiper.facts', {
    loop: true,
    slidesPerView: 1,  
    pagination: {
      el: '.swiper-pagination.facts',
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  const popularSwiper = new Swiper('.swiper.popular', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 1,
      stretch: 200,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.main',
      prevEl: '.swiper-button-prev.main',
    },
    pagination: {
      el: '.swiper-pagination.main',
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
    },
  });
}