const minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    miliseconds = document.querySelector('.miliseconds'),
    start = document.querySelector('.Start'),
    pause = document.querySelector('.Pause'),
    reset = document.querySelector('.Reset');

let min = 0,
    sec = 0,
    mili = 0,
    active = true;

start.addEventListener('click', () => {
    if(active){
        timerCalculate(false);
    }
    active = false;
});

pause.addEventListener('click', () => {
    timerCalculate(true);
    active = true;
});

reset.addEventListener('click', () => {
    timerCalculate(true);
    min = 0;
    sec = 0;
    mili = 0;
    getZero();
    active = true;
});

let interval;

function timerCalculate(isPause) {
    if (!isPause) {
        interval = setInterval(() => {
            mili += 1;
            if (mili == 10) {
                mili = 0;
                sec += 1;
            }
            if (sec == 60) {
                sec = 0;
                min++;
            }
            getZero();
        }, 100);
    } else if (isPause) {
        clearInterval(interval);
    }
}

function getZero() {
    miliseconds.textContent = `0${mili}`;

    if (sec < 10) {
        seconds.textContent = `0${sec}`;
    } else if (sec >= 10) {
        seconds.textContent = `${sec}`;
    }

    if (min < 10) {
        minutes.textContent = `0${min}`;
    } else if (sec >= 10) {
        minutes.textContent = `${min}`;
    }
}

getZero();