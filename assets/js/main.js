window.addEventListener('DOMContentLoaded', function () {
	window.scrollTo(0, 0);
});
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
    console.log(footerBlock);
    console.log(headerBlock);
    headerBlock.classList.add('black');


    pageBlock.classList.remove('hidden-page');
    pageBlock.classList.add('visible');

    reinitializeAOS();
    window.scrollBy(0, 1);
    setTimeout(function() {
        body.classList.remove('no-scroll');
        window.scrollBy(0, 0.1);
    }, 1050);

    setTimeout(function() {

        isAnimationInProgress = false;
        console.log(isAnimationInProgress);
    }, 2000);


});


/*скролл*/



document.addEventListener('wheel', function(e) {
    if (isAnimationInProgress) {
        return; // Якщо анімація вже виконується, вийти з обробника
    }
    var deltaY = e.deltaY;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    console.log(scrollTop);
    if (deltaY > 0) {
        console.log('Колесо миші рухається вниз');



        if (secondBlock.classList.contains('hidden-block') &&  body.classList.contains('no-scroll')) {
            isAnimationInProgress = true;
            firstBlock.classList.add('hidden-block--2');

            secondBlock.classList.remove('hidden-block');
            secondBlock.classList.add('visible');
            reinitializeAOS();



            setTimeout(function() {
                isAnimationInProgress = false;
            }, 2000);
            return;
        }

        else if( pageBlock.classList.contains('hidden-page') &&  body.classList.contains('no-scroll')) {
            isAnimationInProgress = true;
            secondBlock.classList.add('hidden-block--2');
            secondBlock.classList.remove('visible');

            pageBlock.classList.remove('hidden-page');

            footerBlock.classList.add('black');
            headerBlock.classList.add('black');


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
            secondBlock.classList.remove('visible');

            secondBlock.classList.add('hidden-block');
            reinitializeAOS();


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



            // Після завершення анімації скасувати позначку
            setTimeout(function() {
                isAnimationInProgress = false;
                console.log(isAnimationInProgress);
            }, 2000); // 2000 мс - приблизно час тривалості анімації (змініть за потребою)
            return;
        }

    }


});


//

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Додаємо клас активності, який ви хочете встановити
        entry.target.classList.add('active');
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

  const advantagesElement = document.querySelector('.screen--advantages');
  advantagesObserver.observe(advantagesElement);