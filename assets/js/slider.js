var swiper = new Swiper(".swiper-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1600,
    modifier: 1,
    slideShadows: true,
    scale: 1.9
  },
  spaceBetween: 10,
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
