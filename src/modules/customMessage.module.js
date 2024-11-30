import '../styles.css';
import { Module } from "../core/module";

export class CustomMessage extends Module {
    constructor(props) {
        super(1, 'fg'); //Не знаю что тут нужно, без этого не работает

        this.div = document.createElement('div');
        this.div.className = 'customMessage';

        this.span = document.createElement('span');
        this.span.textContent = 'Живи, кайфуй, гуляй, играй, упал, вставай, наглей, ругай, чужих роняй, своих спасай, пельмени, суп, картошка, чай.';
        this.span.style.color = 'white';
        this.span.style.marginLeft = '5px'

        this.h2 = document.createElement('h2');
        this.h2.textContent = 'P.s Jason Statham';

        this.img = document.createElement('img');
        this.img.src = 'src/assets/Jeison.png';
        this.img.className = 'imgCustomMessage';

        this.span.append(this.h2);
        this.div.append(this.span);
        this.div.append(this.img);
        document.body.append(this.div);
        document.body.append(this.button);

    }

    trigger() {
        this.div.style.display = 'block';
        setTimeout(() => {
            this.div.style.display = 'none';
        }, 2000);
    };
}