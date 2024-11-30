import "../styles.css";
import { Module } from "../core/module";

export class ClickCounter extends Module {
  constructor(props) {
    super(5, "Считать клики (за 3 секунды)");

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
    }, 3000);
  }
}
