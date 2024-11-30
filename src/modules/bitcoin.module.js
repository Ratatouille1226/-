import {Module} from '../core/module'

export class BitcoinModule extends Module {
    constructor() {
        super(3, 'Узнать цену Bitcoin');
    }

    trigger() {
        this.popup = document.querySelector('.comment-box')
        if (!this.popup) {
            this.getPopup();
        } else {
            this.destroyPopup();
            this.getPopup();
        }

        setTimeout(() => {
            this.destroyPopup();
        }, 4000)
    };

    getPopup() {
        const apiUrl = 'https://api.coincap.io/v2/assets/bitcoin';
        //ключ: 439e6a2f-06c6-4804-b7e4-abcfda2d8c4a

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка в запросе');
                }
                return response.json();
            })
            .then((result) => {
                this.createPopup(result.data['priceUsd']);
            })
            .catch((error) => {
                this.createPopup('не придумали еще таких чисел');
            });
    }

    createPopup(data) {
        this.popupBlock = document.createElement('div');
        this.popupBlock.className = 'comment-box';
        if (Number(data)) {
            this.price = Math.round(Number(data))
            this.popupBlock.innerText = `Цена Bitcoin сейчас: ${Math.round(Number(data)).toLocaleString('ru')}$`;
        } else {
            this.popupBlock.innerText = `${data}`;
        }

        document.body.append(this.popupBlock);
    }

    destroyPopup() {
        this.popup = document.querySelector('.comment-box')
        this.popup.remove();
    }
}
