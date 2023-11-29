const numberBtns = document.querySelectorAll<HTMLButtonElement>(".number");
const numberBtnsArray = Array.from(numberBtns);
const multiplyBtn = document.querySelector<HTMLButtonElement>("#multiply");
const divideBtn = document.querySelector<HTMLButtonElement>("#divide");
const subtractBtn = document.querySelector<HTMLButtonElement>("#subtract");
const addBtn = document.querySelector<HTMLButtonElement>("#add");
const equalsBtn = document.querySelector<HTMLButtonElement>("#equals");

console.log(numberBtnsArray);
console.log(multiplyBtn, divideBtn, subtractBtn, addBtn, equalsBtn);

function Calculator() {
  numberBtnsArray.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(+btn.value);
      console.log(typeof +btn.value);
    });
  });

  addBtn?.addEventListener("click", () => {
    console.log("add");
  });

  subtractBtn?.addEventListener("click", () => {
    console.log("subtract");
  });

  multiplyBtn?.addEventListener("click", () => {
    console.log("multiply");
  });

  divideBtn?.addEventListener("click", () => {
    console.log("divide");
  });

  equalsBtn?.addEventListener("click", () => {
    console.log("equals");
  });
}

Calculator();

export default Calculator;
