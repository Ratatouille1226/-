import { Menu } from './core/menu'
import { CustomMessage } from './modules/customMessage.module';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.menu = this.el;
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    open() {
        document.addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('click', this.handleItemClick);
    }

    close() {
        this.menu.classList.remove('open');
    }

    add() {
        const customMessage = new CustomMessage().toHTML();
        const backgroundModule = new BackgroundModule().toHTML();
        const shapeModule = new ShapeModule().toHTML();

        this.menu.innerHTML = `
            ${customMessage} 
            ${backgroundModule}
            ${shapeModule}
        `
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

    handleItemClick(e) {
        if (e.target.classList.value === 'menu-item') {
            if (e.target.getAttribute('data-type') == 1) {
                const showCustomMessage = new CustomMessage();
                showCustomMessage.trigger();
            } else if (e.target.getAttribute('data-type') == 2) {
                const showBackgroundModule = new BackgroundModule();
                showBackgroundModule.trigger();
            } else if(e.target.getAttribute('data-type') === 3) {
                const showShape = new ShapeModule();
                showShape.trigger();
            }
        }
        this.close();
    }
}