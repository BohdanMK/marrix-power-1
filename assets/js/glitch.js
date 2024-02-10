var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if(windowWidth > 991) {
    function createGlitchEffect(elementId, countItems, widthElement, heightElement) {
        let bg = document.getElementById(elementId);
        let intervalId;
        let count = countItems;
        let interval = false;

        function showGlitch() {
            // console.log(interval);
            if (interval) {
                console.log(interval);
                return;
            }

            interval = true;

            for (let i = 0; i < count; i++) {
                let glitchBox = document.createElement('div');
                glitchBox.className = 'box';
                bg.appendChild(glitchBox);
            }

            let iterationCount = 0;

            intervalId = setInterval(function () {
                let glitch = document.getElementsByClassName('box');

                for (let i = 0; i < glitch.length; i++) {
                    glitch[i].style.marginLeft = Math.floor(Math.random() * 45) + 'px';
                    // console.log(glitch[i].style.left);
                    glitch[i].style.marginTop = Math.floor(Math.random() * 15) + 'px';
                    glitch[i].style.width = Math.floor(widthElement) + 'px';
                    glitch[i].style.height = Math.floor(heightElement) + 'px';
                }

                iterationCount++;

                if (iterationCount === 16) {
                    clearInterval(intervalId);
                    interval = false;
                    stopGlitch();
                }
            }, 30);
        }

        function stopGlitch() {
            bg.innerHTML = '';
        }

        // Отримайте елемент "page"
        var pageElement = document.getElementById(elementId);
        // console.log(pageElement);

        // Перевірте, чи елемент існує перед додаванням обробників подій
        if (pageElement) {
            // Додайте обробник подій для події "mouseenter" (наведення миші)
            pageElement.addEventListener('mouseenter', showGlitch);

            // Додайте обробник подій для події "mouseleave" (виведення миші)
            // pageElement.addEventListener('mouseleave', stopGlitch);
        } else {
            console.error('Element with id "' + elementId + '" not found.');
        }

        setInterval(function () {
            let randomDelay = Math.floor(Math.random() * 10000);
            console.log();

            setTimeout(showGlitch, randomDelay);
        }, 10000);
    }

    // Виклик функції для елементу з id "glitch"
    createGlitchEffect('glitch1', 240, 60, 15);
    createGlitchEffect('glitch2', 240, 60, 15);
    createGlitchEffect('glitch3', 240, 60, 15);
    createGlitchEffect('glitch6', 240, 40, 12.5);
    createGlitchEffect('glitch7', 140, 40, 12.5);
    createGlitchEffect('glitch8', 240, 40, 12.5);

}

