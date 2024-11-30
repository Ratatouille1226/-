import { ContextMenu } from './menu'
import './styles.css'

document.addEventListener('DOMContentLoaded', function () {
    const contextMenu = new ContextMenu('#menu');

    contextMenu.open();

    contextMenu.close();

    contextMenu.add();
});