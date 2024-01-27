console.log('1233');
// init aos
AOS.init();



//slider owl
$(document).ready(function(){
    // Отримати всі елементи з класом .owl-carousel
    var sliders = $('.owl-carousel');

    // Пройтися по кожному слайдеру і ініціалізувати його
    sliders.each(function(index, element) {
        $(element).owlCarousel({
            loop: true,
            nav: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            freeDrag: false,
            URLhashListener: false,
            dots: false,
            autoplay: true,
            slideTransition: 'linear',
            autoplaySpeed: 3000,
            autoplayTimeout: 3000,
            margin: 72,
            loop: true,
            autoWidth: true,
            items: 8
        });
    });

    // Пройтися по кожному слайдеру і додати події
    sliders.each(function(index, element) {
        var owl = $(element);

        // При ховері на слайдер
        owl.on('mouseover', function () {
            owl.trigger('stop.owl.autoplay'); // Зупиняємо автоплей
        });

        // При виході з ховеру
        owl.on('mouseout', function () {
            owl.trigger('play.owl.autoplay'); // Відновлюємо автоплей
        });

        // Додаткові події або налаштування для кожного слайдера, які вам потрібні
        // ...
    });

    $(window).scroll(function() {
        var currentClassHeader;

        $('section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 100 ) {
                // console.log($(this).offset().top)
                currentClassHeader = $(this).data('class');
            }
        });
        console.log(currentClassHeader);

        $('header').removeClass('white black').addClass(currentClassHeader);
    });

    var windowHeight = $(window).height();

    // Отримати висоту футера
    var footerHeight = $('footer').outerHeight();

    var distanceFromTopToFooter = windowHeight - footerHeight;

    console.log(distanceFromTopToFooter);

    $(window).scroll(function() {

        var currentClassFooter;
        // console.log($(window).scrollTop() + distanceFromTopToFooter )
        $('section').each(function() {
            // console.log($(this).offset().top)
            if ($(this).offset().top < $(window).scrollTop() + distanceFromTopToFooter) {
                currentClassFooter = $(this).data('class');
            }
        });
        console.log(currentClassFooter);

        $('footer').removeClass('white black').addClass(currentClassFooter);
    });
});

// hide element

function hidePreloader() {
    $('.preloader').fadeOut();

}

setTimeout(() => {
    hidePreloader();
}, 5000);


//  // Отримати елементи
//  var sectionOne = document.getElementById('section_one');
//  var sectionTwo = document.getElementById('section_two');
//  var page = document.getElementById('page');

//  // Слідкувати за подією скролу
//  window.addEventListener('scroll', function () {
//    // Отримати висоту вікна перегляду
//    var windowHeight = window.innerHeight;

//    // Отримати висоту скролу
//    var scrollHeight = window.scrollY;

//    // Перевірка, чи перейшов користувач від першого до другого блоку
//    if (scrollHeight > windowHeight) {
//      sectionOne.classList.add('screen--hidden');
//      sectionTwo.classList.remove('screen--hidden');
//    } else {
//      sectionOne.classList.remove('screen--hidden');
//      sectionTwo.classList.add('screen--hidden');
//    }
//  });


document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.scroll-container');

    // Додайте слухач подій на скролл контейнера
    scrollContainer.addEventListener('scroll', function () {
      const scrollLeft = scrollContainer.scrollLeft;
      const screenItems = document.querySelectorAll('.screen-item');

      // Знайдіть індекс елемента, який зараз видимий
      let currentIndex = 0;
      for (let i = 0; i < screenItems.length; i++) {
        const item = screenItems[i];
        const itemRect = item.getBoundingClientRect();

        if (itemRect.left <= 0 && itemRect.right > 0) {
          currentIndex = i;
          break;
        }
      }

      // Перевірте індекс елемента і встановіть/зніміть клас screen-item--hidden
      screenItems.forEach(function (item, index) {
        if (index === currentIndex) {
          item.classList.remove('screen-item--hidden');
        } else {
          item.classList.add('screen-item--hidden');
        }
      });
    });
  });
