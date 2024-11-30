import { Module } from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
    constructor(props) {
        super(4, 'Создать фигуру');
    }
    
    trigger() {
        this.createRandomShape();
        setInterval(() => {
            this.createRandomShape();
            this.removeShape();
        }, 2000);
    }

    createRandomShape() {
        const shapeType = random(0, 2); 
        const size = random(20, 100); 
        const height = random(20, 100); 
        const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`; 
        const x = random(0, window.innerWidth - size);
        const y = random(0, window.innerHeight - size); 
        
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.style.position = 'absolute';
        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;
        
        if (shapeType === 0) { 
            shape.style.width = `${size}px`;
            shape.style.height = `${height}px`;
            shape.style.backgroundColor = color;
        } else if (shapeType === 1) { 
            shape.style.width = `${size}px`;
            shape.style.height = `${height}px`;
            shape.style.borderRadius = '50%';
            shape.style.backgroundColor = color;
        } else if (shapeType === 2) { 
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = `${size / 2}px solid transparent`;
            shape.style.borderRight = `${size / 2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid ${color}`;
        }
    
        document.body.append(shape); 
    }    
    
    removeShape() {
        document.querySelector('.shape').remove();
    }
          
}