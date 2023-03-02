

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;
let timesArray = [];

const handleStart = () => {
    clearInterval(countTime)
    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:0${seconds}`
        }
    }, 100)


}
const handlePause = () => {
    clearInterval(countTime)
}

const handleStop = () => {
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`
    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArray.push(stopwatch.textContent)
    }
    clearStuff()
}

const handleReset = () => {
    clearStuff();
    time.style.visibility = 'hidden';
    timesArray = [];
}

const clearStuff = () => {
    clearInterval(countTime)
    stopwatch.textContent = `0:00`
    seconds = 0
    minutes = 0
    timeList.textContent = '';

}
const showHistory = () => {
    let num = 1;
    timeList.textContent = '';
    timesArray.forEach(el => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Pomiar nr ${num}: <span>${el}</span>`
        timeList.append(listItem)
        num++
    })
}
const handleModal = () => {
    if (modalShadow.style.display === 'block') {
        modalShadow.classList.remove('modal-animation')
        modalShadow.style.display = 'none';
    }
    else {
        modalShadow.classList.add('modal-animation')
        modalShadow.style.display = 'block';
    }

}



startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', handleModal)
closeModalBtn.addEventListener('click', handleModal)