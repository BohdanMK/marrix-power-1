var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log("Ширина екрану: " + windowWidth);


// init aos
function reinitializeAOS() {
    AOS.init({
        // Налаштування AOS
    });
}

reinitializeAOS();


document.addEventListener('DOMContentLoaded', function() {
    // Перевірка, чи це перший візит на сторінку
    if (sessionStorage.getItem('visited') === null) {
        // Позначте сторінку як відвідану
        sessionStorage.setItem('visited', 'true');
    } else {


    }
    window.scrollTo(0, 0);

});



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
            autoHeight: true,

            items: 8,
            responsive: {
                0: {
                    margin: 32,
                    items: 1 // Кількість елементів при ширині екрану менше 600 пікселів
                },
                600: {
                    margin: 0,
                    items: 5 // Кількість елементів при ширині екрану від 600 до 1000 пікселів
                },
                1000: {

                    items: 8 // Кількість елементів при ширині екрану понад 1000 пікселів
                }
            }
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
        // console.log(currentClassHeader);

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
        // console.log(currentClassFooter);

        $('footer').removeClass('white black').addClass(currentClassFooter);
    });


     // Функція для визначення класів хедера та футера при завантаженні сторінки
     function updateHeaderAndFooterClasses() {
        var currentClassHeader;
        var currentClassFooter;

        // Визначення класу для хедера
        $('section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 100) {
                currentClassHeader = $(this).data('class');
            }
        });

        // Визначення класу для футера
        $('section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + distanceFromTopToFooter) {
                currentClassFooter = $(this).data('class');
            }
        });

        // Додавання класів для хедера та футера
        $('header').removeClass('white black').addClass(currentClassHeader);
        $('footer').removeClass('white black').addClass(currentClassFooter);
    }

    // Виклик функції при завантаженні сторінки
    updateHeaderAndFooterClasses();

    // Обробник події прокрутки для оновлення класів при прокрутці


    // Отримати висоту вікна та футера
    var windowHeight = $(window).height();
    var footerHeight = $('footer').outerHeight();
    var distanceFromTopToFooter = windowHeight - footerHeight;

    console.log(distanceFromTopToFooter);


});

// hide element

function hidePreloader() {
    $('.preloader').fadeOut();

}

setTimeout(() => {
    hidePreloader();
}, 5000);



// animations of blocks


const btnSkip = document.querySelector('.screen--main .screen__skip-btn'),
    btnSkip2 = document.querySelector('.screen--innovate .screen__skip-btn'),
    firstBlock = document.querySelector('.screen--main'),
    secondBlock = document.querySelector('.screen--innovate'),
    pageBlock = document.querySelector('.page'),
    body = document.querySelector('body'),
    headerBlock = document.querySelector('.page .header'),
    footerBlock = document.querySelector('.page .footer');

    if(firstBlock) {

        firstBlock.classList.add('visible');

        function initClassForBlocks() {

            secondBlock.style.display = 'flex';
            pageBlock.style.display = 'block';

        }

        setTimeout(()=> {
            initClassForBlocks();
        }, 5000)




    // console.log(btnSkip);

        var isAnimationInProgress = false;


        btnSkip.addEventListener('click', function() {
            if (isAnimationInProgress) {
                return; // Якщо анімація вже виконується, вийти з обробника
            }
            isAnimationInProgress = true;
            // Ваш код для обробки кліку тут
            console.log('Клік на кнопці Skip!');

            firstBlock.classList.add('hidden-block--2');

            secondBlock.classList.remove('hidden-block');
            secondBlock.classList.add('visible');

            reinitializeAOS();
            window.scrollBy(0, 0.1);
            setTimeout(function() {

                isAnimationInProgress = false;
                console.log(isAnimationInProgress);
            }, 2000);
        });

        btnSkip2.addEventListener('click', function() {
            if (isAnimationInProgress) {
                return; // Якщо анімація вже виконується, вийти з обробника
            }
            isAnimationInProgress = true;
            // Ваш код для обробки кліку тут
            console.log('Клік на кнопці Skip!');

            secondBlock.classList.add('hidden-block--2');
            secondBlock.classList.remove('visible');
            footerBlock.classList.add('black');


            pageBlock.classList.remove('hidden-page');
            pageBlock.classList.add('visible');

            reinitializeAOS();
            window.scrollBy(0, 1);
            setTimeout(function() {
                body.classList.remove('no-scroll');
                window.scrollBy(0, 0.1);
                headerBlock.classList.add('black');
            }, 1050);

            setTimeout(function() {

                isAnimationInProgress = false;
                console.log(isAnimationInProgress);
            }, 2000);


        });


        /*скролл*/

        if(windowWidth > 991) {
            document.addEventListener('wheel', function(e) {
                if (isAnimationInProgress) {
                    return; // Якщо анімація вже виконується, вийти з обробника
                }
                var deltaY = e.deltaY;
                var scrollTop = window.scrollY || document.documentElement.scrollTop;

                // console.log(scrollTop);
                if (deltaY > 0) {
                    // console.log('Колесо миші рухається вниз');



                    if (secondBlock.classList.contains('hidden-block') &&  body.classList.contains('no-scroll')) {
                        isAnimationInProgress = true;
                        reinitializeAOS();

                        firstBlock.classList.add('hidden-block--2');

                        secondBlock.classList.remove('hidden-block');
                        secondBlock.classList.add('visible');


                        setTimeout(function() {
                            isAnimationInProgress = false;
                        }, 2000);
                        setTimeout(function() {
                            firstBlock.classList.remove('visible');

                        }, 1000);

                        return;
                    }

                    else if( pageBlock.classList.contains('hidden-page') &&  body.classList.contains('no-scroll')) {
                        isAnimationInProgress = true;
                        secondBlock.classList.add('hidden-block--2');

                        pageBlock.classList.remove('hidden-page');
                        pageBlock.classList.add('visible');

                        footerBlock.classList.add('black');
                        headerBlock.classList.add('black');

                        setTimeout(function() {
                            secondBlock.classList.remove('visible');

                        }, 1000);

                        reinitializeAOS();
                        setTimeout(function() {
                            body.classList.remove('no-scroll');
                            window.scrollBy(0, 0.1);
                        }, 1050);


                        setTimeout(function() {

                            isAnimationInProgress = false;
                            console.log(isAnimationInProgress);
                        }, 2000);
                        reinitializeAOS();

                        return;
                    }

                } else {
                    if (scrollTop == 0 && firstBlock.classList.contains('hidden-block--2') &&  body.classList.contains('no-scroll') && !secondBlock.classList.contains('hidden-block--2') ) {
                        isAnimationInProgress = true;
                        firstBlock.classList.remove('hidden-block--2');
                        firstBlock.classList.add('visible');

                        secondBlock.classList.add('hidden-block');
                        reinitializeAOS();

                        setTimeout(function() {
                            secondBlock.classList.remove('visible');

                        }, 1000);


                        // Після завершення анімації скасувати позначку
                        setTimeout(function() {
                            isAnimationInProgress = false;
                            console.log(isAnimationInProgress);
                        }, 2000); // 2000 мс - приблизно час тривалості анімації (змініть за потребою)
                        return;
                    }

                    if(scrollTop == 0 && secondBlock.classList.contains('hidden-block--2') &&  !body.classList.contains('no-scroll')) {
                        isAnimationInProgress = true;
                        secondBlock.classList.remove('hidden-block--2');
                        secondBlock.classList.add('visible');
                        // window.scrollBy(0, 0.5);
                        body.classList.add('no-scroll');
                        pageBlock.classList.add('hidden-page');


                        setTimeout(function() {
                            pageBlock.classList.remove('visible');

                        }, 1000);


                        // Після завершення анімації скасувати позначку
                        setTimeout(function() {
                            isAnimationInProgress = false;
                            console.log(isAnimationInProgress);
                        }, 2000); // 2000 мс - приблизно час тривалості анімації (змініть за потребою)
                        return;
                    }

                }
            });
        } else {

            var lastTouchY = null;

            document.addEventListener('touchstart', function(e) {
            lastTouchY = e.touches[0].clientY;
            });

            document.addEventListener('touchmove', function(e) {
            if (lastTouchY === null) {
                return;
            }

            var currentTouchY = e.touches[0].clientY;

            if (currentTouchY < lastTouchY) {
                var scrollTop = window.scrollY || document.documentElement.scrollTop;


                // Скрол вниз
                if (pageBlock.classList.contains('hidden-page')) {

                        isAnimationInProgress = true;
                        firstBlock.classList.add('hidden-block--2');

                        body.classList.add('blocked');
                        pageBlock.classList.remove('hidden-page');
                        pageBlock.classList.add('visible');

                        footerBlock.classList.add('black');
                        headerBlock.classList.add('black');


                        reinitializeAOS();
                        setTimeout(function() {
                            body.classList.remove('blocked');
                            body.classList.remove('no-scroll');
                            firstBlock.classList.remove('visible');
                            window.scrollBy(0, 0.1);
                        }, 1050);


                        setTimeout(function() {

                            isAnimationInProgress = false;
                            console.log(isAnimationInProgress);
                        }, 2000);
                        reinitializeAOS();

                        return;
                }

            } else if (currentTouchY > lastTouchY) {
                // Скрол вгору
                var scrollTop = window.scrollY || document.documentElement.scrollTop;



                if (firstBlock.classList.contains('hidden-block--2') && scrollTop === 0) {
                    isAnimationInProgress = true;
                    firstBlock.classList.remove('hidden-block--2');
                    firstBlock.classList.add('visible');
                    body.classList.add('blocked');
                    body.classList.add('no-scroll');

                    pageBlock.classList.add('hidden-page');
                    setTimeout(function() {
                        pageBlock.classList.remove('visible');
                        body.classList.add('blocked');

                    }, 1000);

                    reinitializeAOS();
                    setTimeout(function() {

                        window.scrollBy(0, 0.1);
                    }, 1050);


                    setTimeout(function() {

                        isAnimationInProgress = false;
                        console.log(isAnimationInProgress);
                    }, 2000);
                    reinitializeAOS();

                    return;
                }
            }

            lastTouchY = currentTouchY;
            });
        }

    } else {
        body.classList.remove('no-scroll');
        pageBlock.classList.add('visible');
    }


//

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Додаємо клас активності, який ви хочете встановити
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  });

  // Вибираємо всі елементи з масиву
  const elementsToObserve = document.querySelectorAll('.block-name__line');

  // Починаємо спостереження для кожного елемента
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });


  const advantagesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Перевірте, чи більше 70% елемента видно
        if (entry.intersectionRatio >= 0.7) {
          // Додаємо клас активності, коли більше 70% елемента видно
          entry.target.classList.add('active');
        }
      } else {
        // Видаляємо клас активності, коли елемент виходить з області видимості
        entry.target.classList.remove('active');
      }
    });
  }, {
    // Встановлюємо threshold на 0.7 (70% видимості)
    threshold: 0.7
  });

  const advantagesElement = document.querySelectorAll('.page .screen');
  console.log(advantagesElement);
//   advantagesObserver.observe(advantagesElement);

advantagesElement.forEach(element => {
    observer.observe(element);
  });


  // add contact popup

  const openModalBtns = document.querySelectorAll('.open-form');
  const popupContact = document.querySelector('.popup-contact');
  const contactPopup = document.querySelector('.popup-contact__close');

  openModalBtns.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', () => {
        popupContact.classList.add('active');
    });
  });

  contactPopup.addEventListener('click', () => {
    popupContact.classList.remove('active');
});





$(document).ready(function () {
    const screenHeight = window.innerHeight;
    const container = $('.screen__wrapper');
    let containerWidthWithBorders = container.width();

    let stateOfAction = false;

    const burgerBtns = $('.burger--popup');
    const menuPopupLine = $('.menu-popup__line');
    const distanceFromTop = menuPopupLine.offsetTop;
    console.log(distanceFromTop);
    const menuBg = $('.menu-popup__bg');
    const menuPopUpContent = $('.menu-popup__content');
    const modalMenuPage = $('.menu-popup');
    const burgerPopUp = $('.burger.burger--popup');
    const headerBlock = $('.header');
    const secondBlock = $('.screen--innovate');

    // console.log(burgerPopUp);

    menuPopUpContent.width(containerWidthWithBorders);

    burgerBtns.on('click', function () {
        if(stateOfAction === true) {
            return;
        }

        stateOfAction = true;

        if ($(this).hasClass('active')) {

            // Виконати зворотні дії при повторному кліку
            burgerBtns.removeClass('active');

            menuPopupLine.css('transform', 'translateY(0)');
            menuBg.css('height', '0');
            menuPopUpContent.css({ 'height': '0', 'opacity': 0 });
            burgerBtns.removeClass('active');

            setTimeout(() => {

                menuPopupLine.css('width', '0');
            }, 400);
            setTimeout(() => {
                modalMenuPage.addClass('hidden').removeClass('active');

            }, 1200);
        } else {
            // Виконати дії при першому кліку
            burgerBtns.addClass('active');
            modalMenuPage.removeClass('hidden').addClass('active');
            menuPopupLine.css('width', containerWidthWithBorders + 'px');

            if(headerBlock.hasClass('black') && secondBlock.hasClass('hidden-block--2')) {
                menuPopupLine.css({ 'background': '#121212'});

            }

            if(headerBlock.hasClass('white') && secondBlock.hasClass('hidden-block--2')) {
                menuPopupLine.css({ 'background': '#ffffff'});

            }

            menuPopUpContent.css('width', containerWidthWithBorders + 'px');
            burgerPopUp.addClass('active');
            setTimeout(() => {
                menuPopupLine.css('transform', 'translateY(95vh)');
            }, 415);

            setTimeout(() => {
                menuBg.css({ 'height': '100vh' });
                menuPopUpContent.css({ 'height': '100vh', 'opacity': 1 });
            }, 415);


        }

        setTimeout(() => {
            stateOfAction = false;
        }, 1200);
    });
});


// change logo on one letter when we scroll our website

const headerLogo = document.querySelector('header .logo.logo--head');


window.addEventListener('scroll', () => {
    // Отримати позицію скролу від гори сайту
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Вивести в консоль позицію скролу

    if(scrollPosition > 50) {
        headerLogo.classList.add('small');
    } else {
        headerLogo.classList.remove('small');
    }

});


// make on focus input when click on label

const formLabels = document.querySelectorAll('.field__title');
console.log(formLabels);

formLabels.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(12312312313)
        // Знаходимо батьківський контейнер з класом clearfix
        const clearfixContainer = item.closest('.clearfix');

        // Перевіряємо, чи знайдено такий контейнер
        if (clearfixContainer) {
            // Знаходимо елемент input або textarea
            const inputOrTextarea = clearfixContainer.querySelector('input, textarea');

            // Перевіряємо, чи знайдено такий елемент
            if (inputOrTextarea) {
                // Робимо, якщо елемент знайдено
                inputOrTextarea.focus();
            }
        }
    });
});


//animation in footer when we scrolled almost down of page

const footerWrapper = document.querySelector('.footer');
console.log(footerWrapper);

const footerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Перевірте, чи більше 70% елемента видно
        if (entry.intersectionRatio >= 0.7) {
          // Додаємо клас активності, коли більше 70% елемента видно
          entry.target.classList.add('active');
          footerWrapper.classList.add('active');
        }
      } else {
        // Видаляємо клас активності, коли елемент виходить з області видимості
        entry.target.classList.remove('active');
        footerWrapper.classList.remove('active');
      }
    });
  }, {
    // Встановлюємо threshold на 0.7 (70% видимості)
    threshold: 0.7
});

const footerElement = document.querySelector('.screen--information');
footerObserver.observe(footerElement);






