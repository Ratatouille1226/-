import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor(props) {
        super(2, 'Изменить цвет фона');
    }

    trigger() {
        document.body.style.background = `rgb(${this.getRandomRgbColor(0, 255)}, ${this.getRandomRgbColor(0, 255)}, ${this.getRandomRgbColor(0, 255)})`;
    };

    getRandomRgbColor() {
        return Math.floor(Math.random() * 256);
    }
}
