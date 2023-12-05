// Variables setup

const numberBtns = document.querySelectorAll<HTMLButtonElement>(".number");
const numberBtnsArray = Array.from(numberBtns);

const multiplyBtn = document.querySelector<HTMLButtonElement>("#multiply");
const divideBtn = document.querySelector<HTMLButtonElement>("#divide");
const subtractBtn = document.querySelector<HTMLButtonElement>("#subtract");
const addBtn = document.querySelector<HTMLButtonElement>("#add");

const equalsBtn = document.querySelector<HTMLButtonElement>("#equals");

const clearBtn = document.querySelector<HTMLButtonElement>("#clear");

const currentNumber = document.querySelector<HTMLDivElement>(".current-number");
const previousNumber =
  document.querySelector<HTMLDivElement>(".previous-number");
const mathSign = document.querySelector<HTMLDivElement>(".math-sign");

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

// Operator function

function operate(a: number, b: number, operator: string): number {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Invalid operator");
  }
}

// Action functions

function addMathSign(operator: string) {
  mathSign?.appendChild(document.createTextNode(operator));
}

function getNumber() {
  numberBtnsArray.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(+btn.value);
      console.log(typeof +btn.value);
      if (currentNumber?.firstChild?.nodeValue === "0") {
        currentNumber.removeChild(currentNumber.firstChild!);
        currentNumber.appendChild(document.createTextNode(btn.value));
      } else {
        currentNumber?.appendChild(document.createTextNode(btn.value));
      }
    });
  });
}

function arithmetic() {
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

function clear() {
  clearBtn?.addEventListener("click", () => {
    console.log("clear");
    if (mathSign?.firstChild) {
      mathSign.removeChild(mathSign.firstChild!);
    }

    if (previousNumber?.firstChild) {
      previousNumber.removeChild(previousNumber.firstChild!);
    }

    currentNumber?.replaceChildren(document.createTextNode("0"));
  });
}

// Main Calculator function

export default function Calculator() {
  getNumber();
  arithmetic();
  clear();
}
