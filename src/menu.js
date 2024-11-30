import {Menu} from './core/menu'

import {CustomMessage} from './modules/customMessage.module';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.menu = this.el;
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        this.li = document.createElement('li');
        this.li.textContent = 'Кастомное сообщение';
        this.li.className = 'menu-item';

        this.menu.append(this.li);

        const custom = new CustomMessage();

        this.li.addEventListener('click', () => {
            custom.trigger();
        })
    }

    

    open() {
        document.addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('click', this.handleDocumentClick);
        console.log(this.menu)
    }

    close() {
        this.menu.classList.remove('open');
    }

    add() {
        console.log('Добавить функционал в ContextMenu');
    }

    handleContextMenu(e) {
        e.preventDefault();
        const xCoord = e.pageX;
        const yCoord = e.pageY;
        this.menu.classList.add('open');
        this.menu.style.position = 'absolute';
        this.menu.style.top = `${yCoord}px`;
        this.menu.style.left = `${xCoord}px`;
    }

    handleDocumentClick(e) {
        if (!this.menu.contains(e.target)) {
            this.close();
        }
    }
}
