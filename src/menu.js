import { Menu } from './core/menu';
import { CustomMessage } from './modules/customMessage.module';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';
import { BitcoinModule } from './modules/bitcoin.module';
import { ClickCounter } from './modules/clickCounter.module';
import { JingleBells } from './modules/jingleBells.module';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.menu = this.el;
        this.modules = [
            { type: 1, class: JingleBells, label: 'С наступающим новым годом!'},
            { type: 2, class: CustomMessage, label: 'Сообщение' },
            { type: 3, class: BackgroundModule, label: 'Изменить цвет фона' },
            { type: 4, class: ShapeModule, label: 'Форма' },
            { type: 5, class: BitcoinModule, label: 'Биткоин'},
            { type: 6, class: ClickCounter, label: 'Счётчик кликов'},
        ];

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
        this.menu.innerHTML = this.modules.map(module => {
            const moduleInstance = new module.class();
            return moduleInstance.toHTML();
        }).join('');
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
        const clickedItem = e.target.closest('.menu-item');
        if (clickedItem) {
            const type = parseInt(clickedItem.getAttribute('data-type'), 10);
            const module = this.modules.find(mod => mod.type === type);
            if (module) {
                const moduleInstance = new module.class();
                moduleInstance.trigger();
            }
            this.close();
        }
    }
}