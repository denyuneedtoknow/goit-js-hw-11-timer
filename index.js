class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.refs = {

            seconds: document.querySelector('[data-value="secs"]'),
            minutes: document.querySelector('[data-value="mins"]'),
            hours: document.querySelector('[data-value="hours"]'),
            days: document.querySelector('[data-value="days"]'),
        };
        this.selector = selector;
        this.targetDate = targetDate
        // this.targetDate = new Date(2021, 7, 16, 11, 59, 0, 0);
        this.id = null;
        this.startDate = null;

    }
    calc = () => {
        const currentDate = Date.now();
        const delta = (this.targetDate - currentDate) / 1000;
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

}

const watch = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 17, 2022'),
});
window.addEventListener('DOMContentLoaded', watch.timerStart);