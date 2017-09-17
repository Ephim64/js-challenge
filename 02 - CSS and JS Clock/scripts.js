(function () {
    'use strict';
    // setTimeout на 1 секунду
    // получить текущее время
    // трансормировать в угол
    // применить к стрелкам
    const hourHand = document.querySelector('div.hand.hour-hand');
    const minHand = document.querySelector('div.hand.min-hand');
    const secondHand = document.querySelector('div.hand.second-hand');
    let secondsTransition = null;
    let timeout = null;

    function transformToDeg() {
        const time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const secondsAngle = (seconds * 6) + 90;
        const minutesAngle = (minutes * 6) + 90;
        const hourAngle = (30 * hours) + 90;
        if (seconds === 59) {
            secondsTransition = secondHand.style.transition;
            secondHand.style.removeProperty('transition');
        }
        if (seconds === 1) {
            secondHand.style.setProperty('transition', secondsTransition);
        }

        secondHand.style.setProperty('transform', `rotate(${secondsAngle}deg)`);
        minHand.style.setProperty('transform', `rotate(${minutesAngle}deg)`);
        hourHand.style.setProperty('transform', `rotate(${hourAngle}deg)`)

        timeout = setTimeout(transformToDeg, 1000);
    }

    timeout = setTimeout(transformToDeg, 1000)

})()