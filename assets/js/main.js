console.log('1233');
// init aos
AOS.init();


// Додавання класу "active" за допомогою JavaScript
let titleElement = document.querySelector('.screen__title');

function makeActiveTitle() {
    setTimeout(() => {
        titleElement.classList.add('active');

    });

    setTimeout(() => {
        titleElement.classList.add('blue');

    }, 3000);
}

makeActiveTitle();


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


});

