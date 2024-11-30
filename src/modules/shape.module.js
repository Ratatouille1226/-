import {Module} from '../core/module'
import {random} from '../utils'

export class ShapeModule extends Module {
    constructor(props) {
        super(3, 'Создать фигуру');
    }
    
    trigger() {
    const shape = document.createElement('div');
    const size = random(50, 150);
    const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`; 
    const x = random(0, window.innerWidth - size);
    const y = random(0, window.innerHeight - size); 
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.backgroundColor = color;
    shape.style.position = 'absolute';
    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;
    shape.style.borderRadius = Math.random() < 0.5 ? '50%' : '0';
    document.body.append(shape);
}
}