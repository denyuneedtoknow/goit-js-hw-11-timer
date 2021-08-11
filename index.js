class StopWatch {
    constructor() {
        this.refs = {
            start: document.querySelector('#start'),
            stop: document.querySelector('#stop'),
            seconds: document.querySelector('#seconds'),
            minutes: document.querySelector('#minutes'),
            hours: document.querySelector('#hours'),
            days: document.querySelector('#days'),
        };
        this.id = null;
        this.startDate = null;
        this.deadline = new Date(2021, 7, 16, 11, 59, 0, 0);
    }
    calc = () => {
        const currentDate = Date.now();
        // const delta = (currentDate - this.startDate) / 1000;
        const delta = (this.deadline - currentDate) / 1000;
        const sec = Math.floor(delta % 60);
        const mins = Math.floor((delta / 60) % 60);
        const hours = Math.floor((delta / 60 / 60) % 60);
        const days = Math.floor(delta / 60 / 60 / 24);
        this.refs.seconds.textContent = sec < 10 ? `0${sec}` : sec;
        this.refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
        this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
        this.refs.days.textContent = days < 10 ? `0${days}` : days;
    };

    timerStart = () => {
        this.startDate = Date.now();
        this.id = setInterval(this.calc, 1000);
    };
    timerStop = () => {
        clearInterval(this.id);
    };

    //  стрелка привязывает вместо bind

    init() {
        this.refs.start.addEventListener('click', this.timerStart);
        this.refs.stop.addEventListener('click', this.timerStop);
    }
}

const watch = new StopWatch();
window.addEventListener('DOMContentLoaded', watch.timerStart);