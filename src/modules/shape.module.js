import {Module} from '../core/module'
import {random} from '../utils'

export class ShapeModule extends Module {
    constructor(props) {
        super(3, 'Создать фигуру');
    }

    trigger() {
        this.shape = document.createElement('div');
        this.size = random(50, 150);
        this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        this.x = random(0, window.innerWidth - this.size);
        this.y = random(0, window.innerHeight - this.size);
        this.shape.style.width = `${this.size}px`;
        this.shape.style.height = `${this.size}px`;
        this.shape.style.backgroundColor = this.color;
        this.shape.style.position = 'absolute';
        this.shape.style.left = `${this.x}px`;
        this.shape.style.top = `${this.y}px`;
        this.shape.style.borderRadius = Math.random() < 0.5 ? '50%' : '0';
        document.body.append(this.shape);
    }
}
