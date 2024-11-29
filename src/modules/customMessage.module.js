import { Module } from "../core/module";

export class CustomMessage extends Module {
    constructor(props) {
        super(1, 'fg'); //Не знаю что тут нужно, без этого не работает

        this.div = document.createElement('div');
        this.div.style.border = '1px solid black'
        this.div.style.width = '400px';
        this.div.style.height = '200px';
        this.div.style.display = 'none';

        this.span = document.createElement('span');
        this.span.textContent = 'Hello World';

        this.img = document.createElement('img');

        this.button = document.createElement('button');
        this.button.style.width = '150px';
        this.button.style.height = '50px';
        this.button.textContent = 'Открыть сообщение';

        this.div.append(this.span);
        document.body.append(this.div);
        document.body.append(this.button);

        this.button.addEventListener('click', event => {
            this.trigger();
        });
    }

    trigger() {
        this.div.style.display = 'block';
        this.button.style.display = 'none';
        setTimeout(() => {
            this.div.style.display = 'none';
            this.button.style.display = 'block';
        }, 3000);
    };
}