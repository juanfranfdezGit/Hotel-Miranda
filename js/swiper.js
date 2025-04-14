export default function swiper() {
    const swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1, 
      loop: true, 
      coverflowEffect: {
        rotate: 30,
        stretch: 0, 
        depth: 100,
        modifier: 1, 
        slideShadows: true, 
      },
      spaceBetween: 0, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }