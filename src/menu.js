import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.menu = this.el;
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }

    open() {
        document.addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('click', this.handleDocumentClick);
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
