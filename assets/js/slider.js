var swiper = new Swiper(".swiper-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 1000,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1200,
    modifier: 1,
    slideShadows: true,
    scale: 1.5
  },
  spaceBetween: -400,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".slider__prev-arr",
    nextEl: ".slider__next-arr"

  },
  autoplay: {
    delay: 5000, // автоплей кожні 5 секунд
    disableOnInteraction: false // не зупиняти автоплей при взаємодії користувача
  }
});
