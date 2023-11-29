// Variables setup

const numberBtns = document.querySelectorAll<HTMLButtonElement>(".number");
const numberBtnsArray = Array.from(numberBtns);

const multiplyBtn = document.querySelector<HTMLButtonElement>("#multiply");
const divideBtn = document.querySelector<HTMLButtonElement>("#divide");
const subtractBtn = document.querySelector<HTMLButtonElement>("#subtract");
const addBtn = document.querySelector<HTMLButtonElement>("#add");

const equalsBtn = document.querySelector<HTMLButtonElement>("#equals");

const clearBtn = document.querySelector<HTMLButtonElement>("#clear");

const currentNumber = document.querySelector<HTMLDivElement>("#current-number");

// Logic functions

function add(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}

function subtract(a: number, b: number): number {
  console.log(a - b);
  return a - b;
}

function multiply(a: number, b: number): number {
  console.log(a * b);
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  console.log(a / b);
  return a / b;
}

// Main Calculator function

export default function Calculator() {
  numberBtnsArray.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(+btn.value);
      console.log(typeof +btn.value);
    });
  });

  addBtn?.addEventListener("click", () => {
    console.log("add");
    add(1, 2);
  });

  subtractBtn?.addEventListener("click", () => {
    console.log("subtract");
    subtract(1, 2);
  });

  multiplyBtn?.addEventListener("click", () => {
    console.log("multiply");
    multiply(1, 2);
  });

  divideBtn?.addEventListener("click", () => {
    console.log("divide");
    divide(1, 2);
  });

  equalsBtn?.addEventListener("click", () => {
    console.log("equals");
  });
}
