import "../styles.css";
import { Module } from "../core/module";

export class ClickCounter extends Module {
  constructor(props) {
    super(6, "Считать клики (за 3 секунды)");

    this.state = {
      counter: 0,
      time: 3,
    };
  }

  trigger() {
    this.div = document.createElement("div");
    this.div.className = "clickCounter";

    this.h1 = document.createElement("h1");
    this.h1.textContent = `Количество кликов: ${this.state.counter}`;

    this.timer = document.createElement("h2");
    this.timer.textContent = `Осталось секунд: ${this.state.time}`;

    this.div.append(this.h1);
    this.div.append(this.timer);
    document.body.append(this.div);

    this.div.style.display = "block";
    setInterval(() => {
      this.timer.textContent = `Осталось секунд: ${--this.state.time}`;
    }, 1000);

    document.body.addEventListener("click", () => {
      console.log("nkjnjkkj");
      this.h1.textContent = `Количество кликов: ${++this.state.counter}`;
    });
    setTimeout(() => {
      this.div.style.display = "none";
      if (this.state.counter === 1) {
        alert(`Вы успели сделать ${this.state.counter} клик`);
      } else if (this.state.counter > 1 && this.state.counter <= 4) {
        alert(`Вы успели сделать ${this.state.counter} клика`);
      } else {
        alert(`Вы успели сделать ${this.state.counter} кликов`);
      }
    }, 3000);
  }
}
