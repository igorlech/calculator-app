import "./reset.scss";
import "./variables.scss";
import "./main.scss";

const numberBtns = document.querySelectorAll<HTMLButtonElement>(".number");
const numberBtnsArray = Array.from(numberBtns);

console.log(numberBtnsArray);

function Calculator() {
  numberBtnsArray.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(+btn.value);
      console.log(typeof +btn.value);
    });
  });
}

Calculator();
