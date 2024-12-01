import { Module } from "../core/module";
import "../styles.css";

export class TimerModule extends Module {
    constructor(props) {
        super(7, 'Включить таймер');
    }

    trigger() {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = 'timeInput';
        input.placeholder = 'Введите время в секундах';
        document.body.append(input);

        const startButton = document.createElement('button');
        startButton.id = 'startButton';
        startButton.textContent = 'Запустить таймер';
        document.body.append(startButton);

        const timer = document.createElement('div');
        timer.id = 'timer';
        const timerDisplay = document.createElement('p');
        timerDisplay.id = 'timerDisplay';
        timer.append(timerDisplay);
        document.body.append(timer);

        const timeout = new Audio("src/assets/timeout.mp3");
        startButton.addEventListener('click', function() {
            let timeRemaining = parseInt(input.value, 10);

            if (isNaN(timeRemaining) || timeRemaining <= 0) {
                alert('Пожалуйста, введите положительное число!');
                return;
            }

            timer.style.display = 'block';
            timerDisplay.textContent = timeRemaining + ' секунд осталось';

            const countdown = setInterval(function() {
                timeRemaining--;
                timerDisplay.textContent = timeRemaining + ' секунд осталось';

                if (timeRemaining <= 0) {
                    clearInterval(countdown);
                    timerDisplay.textContent = 'Время вышло!';
                    timeout.play();
                    setTimeout(() => {
                        timer.style.display = 'none';
                        input.style.display = 'none';
                        startButton.style.display = 'none';
                    }, 2000);
                }
            }, 1000);
        });


    }
}