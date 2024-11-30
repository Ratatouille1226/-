import { Module } from "../core/module";
import "../styles.css";

export class JingleBells extends Module {
  constructor(props) {
    super(1, "С наступающим!");

    this.audio = new Audio("src/assets/jingleBells.mp3");

    this.button = document.createElement('button');
    this.button.className = 'button';
    this.button.textContent = 'Выключить музыку';

    this.button.addEventListener('click', this.off.bind(this));
  }

  trigger() {
    this.audio.play();
    document.body.append(this.button);
  }

  off() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.button.remove();
  }
}
