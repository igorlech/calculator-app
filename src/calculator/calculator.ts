// Variables setup

const numberBtns = document.querySelectorAll<HTMLButtonElement>(".number");
const numberBtnsArray = Array.from(numberBtns);

const multiplyBtn = document.querySelector<HTMLButtonElement>("#multiply");
const divideBtn = document.querySelector<HTMLButtonElement>("#divide");
const subtractBtn = document.querySelector<HTMLButtonElement>("#subtract");
const addBtn = document.querySelector<HTMLButtonElement>("#add");

const equalsBtn = document.querySelector<HTMLButtonElement>("#equals");

const clearBtn = document.querySelector<HTMLButtonElement>("#clear");

let currentNumber = document.querySelector<HTMLDivElement>(".current-number");
let previousNumber = document.querySelector<HTMLDivElement>(".previous-number");
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
      const btnValue = btn.value.toString();
      console.log(+btnValue);
      console.log(typeof +btnValue);
      if (currentNumber?.firstChild?.nodeValue === "0") {
        currentNumber.removeChild(currentNumber.firstChild!);
        currentNumber.appendChild(document.createTextNode(btnValue));
      } else {
        currentNumber?.appendChild(document.createTextNode(btnValue));
      }
    });
  });
}

function arithmetic() {
  addBtn?.addEventListener("click", () => {
    console.log("add");
    addMathSign("+");
    currentNumber?.replaceChildren(document.createTextNode("0"));
    let currentArray: Array<Node> = [];
    currentNumber?.childNodes.forEach((child) => {
      currentArray.push(child);
    });
    previousNumber?.appendChild(currentArray[0]);
  });

  subtractBtn?.addEventListener("click", () => {
    console.log("subtract");
    addMathSign("-");
  });

  multiplyBtn?.addEventListener("click", () => {
    console.log("multiply");
    addMathSign("*");
  });

  divideBtn?.addEventListener("click", () => {
    console.log("divide");
    addMathSign("/");
  });

  equalsBtn?.addEventListener("click", () => {
    try {
      const current = parseFloat(currentNumber?.innerText || "0");
      const previous = parseFloat(previousNumber?.innerText || "0");
      const operator = mathSign?.innerText || "+";

      const result = operate(previous, current, operator);

      // Display the result
      currentNumber?.replaceChildren(
        document.createTextNode(result.toString())
      );
      previousNumber?.replaceChildren(document.createTextNode(""));
      mathSign?.replaceChildren(document.createTextNode(""));
    } catch (error) {
      console.error(error);
      // console.error("Error during calculation:", error.message);
    }
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
