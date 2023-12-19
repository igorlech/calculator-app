import { mathSigns } from "./mathSigns";

export class Calculator {
  private numberBtns = document.querySelectorAll<HTMLButtonElement>(".number");
  private numberBtnsArray = Array.from(this.numberBtns);

  private multiplyBtn = document.querySelector<HTMLButtonElement>("#multiply");
  private divideBtn = document.querySelector<HTMLButtonElement>("#divide");
  private subtractBtn = document.querySelector<HTMLButtonElement>("#subtract");
  private addBtn = document.querySelector<HTMLButtonElement>("#add");

  private equalsBtn = document.querySelector<HTMLButtonElement>("#equals");

  private clearBtn = document.querySelector<HTMLButtonElement>("#clear");

  private currentNumber =
    document.querySelector<HTMLParagraphElement>(".current-number");
  private previousNumber =
    document.querySelector<HTMLDivElement>(".previous-number");
  private mathSign = document.querySelector<HTMLDivElement>(".math-sign");

  constructor() {
    this.getNumber();
    this.arithmetic();
    this.clear();
  }

  private add(a: number, b: number): number {
    console.log(a + b);
    return a + b;
  }

  private subtract(a: number, b: number): number {
    console.log(a - b);
    return a - b;
  }

  private multiply(a: number, b: number): number {
    console.log(a * b);
    return a * b;
  }

  private divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log(a / b);
    return a / b;
  }

  private operate(a: number, b: number, operator: string): number {
    switch (operator) {
      case "+":
        return this.add(a, b);
      case "-":
        return this.subtract(a, b);
      case "*":
        return this.multiply(a, b);
      case "/":
        return this.divide(a, b);
      default:
        throw new Error("Invalid operator");
    }
  }

  private addMathSign(operator: string) {
    this.mathSign?.appendChild(document.createTextNode(operator));
    if (this.mathSign?.hasChildNodes()) {
      this.mathSign?.replaceChildren(document.createTextNode(operator));
    }
  }

  private getNumber() {
    this.numberBtnsArray.forEach((btn) => {
      btn.addEventListener("click", () => {
        const btnValue = btn.value.toString();
        if (this.currentNumber) {
          this.currentNumber.textContent =
            this.currentNumber.textContent === "0"
              ? btnValue
              : this.currentNumber.textContent + btnValue;
        }
      });
    });
  }

  private arithmetic() {
    this.addBtn?.addEventListener("click", () => {
      console.log("add");
      this.addMathSign(mathSigns.add);

      let currentNumberValue = this.currentNumber?.innerText || "0";
      let previousNumberValue = this.previousNumber?.innerText || "0";

      this.previousNumber?.replaceChildren(
        document.createTextNode(currentNumberValue)
      );

      this.currentNumber?.replaceChildren(document.createTextNode("0"));

      let numberCurrent = parseFloat(currentNumberValue);
      let numberPrevious = parseFloat(previousNumberValue);

      this.add(numberCurrent, numberPrevious);
    });

    this.subtractBtn?.addEventListener("click", () => {
      console.log("subtract");
      this.addMathSign(mathSigns.subtract);

      let currentNumberValue = this.currentNumber?.innerText || "0";
      let previousNumberValue = this.previousNumber?.innerText || "0";

      this.previousNumber?.replaceChildren(
        document.createTextNode(currentNumberValue)
      );

      this.currentNumber?.replaceChildren(document.createTextNode("0"));

      let numberCurrent = parseFloat(currentNumberValue);
      let numberPrevious = parseFloat(previousNumberValue);

      this.subtract(numberCurrent, numberPrevious);
    });

    this.multiplyBtn?.addEventListener("click", () => {
      console.log("multiply");
      this.addMathSign(mathSigns.multiply);

      let currentNumberValue = this.currentNumber?.innerText || "0";
      let previousNumberValue = this.previousNumber?.innerText || "0";

      this.previousNumber?.replaceChildren(
        document.createTextNode(currentNumberValue)
      );

      this.currentNumber?.replaceChildren(document.createTextNode("0"));

      let numberCurrent = parseFloat(currentNumberValue);
      let numberPrevious = parseFloat(previousNumberValue);

      this.multiply(numberCurrent, numberPrevious);
    });

    this.divideBtn?.addEventListener("click", () => {
      console.log("divide");
      this.addMathSign(mathSigns.divide);

      let currentNumberValue = this.currentNumber?.innerText || "0";
      let previousNumberValue = this.previousNumber?.innerText || "0";

      this.previousNumber?.replaceChildren(
        document.createTextNode(currentNumberValue)
      );

      this.currentNumber?.replaceChildren(document.createTextNode("0"));

      let numberCurrent = parseFloat(currentNumberValue);
      let numberPrevious = parseFloat(previousNumberValue);

      this.divide(numberCurrent, numberPrevious);
    });

    this.equalsBtn?.addEventListener("click", () => {
      try {
        const current = parseFloat(this.currentNumber?.innerText || "0");
        const previous = parseFloat(this.previousNumber?.innerText || "0");
        const operator = this.mathSign?.innerText || "+";

        const result = this.operate(previous, current, operator);

        this.currentNumber?.replaceChildren(
          document.createTextNode(result.toString())
        );

        this.previousNumber?.replaceChildren(document.createTextNode(""));
        this.mathSign?.replaceChildren(document.createTextNode(""));
      } catch (error) {
        console.error(error);
        // console.error("Error during calculation:", error.message);
      }
    });
  }

  // TODO: Fix clear function, not working well for clearing more input than 1
  // UPDATE: I think it's now fixed but can be done in a better way
  private clear() {
    let isCleared = false;

    this.clearBtn?.addEventListener("click", () => {
      if (isCleared) {
        return;
      }

      console.log("clear");

      if (this.mathSign) {
        this.mathSign.innerHTML = "";
      }

      if (this.previousNumber) {
        this.previousNumber.innerHTML = "";
      }

      this.currentNumber?.replaceChildren(document.createTextNode("0"));

      isCleared = true;
    });

    this.addBtn?.addEventListener("click", () => {
      isCleared = false;
    });

    this.subtractBtn?.addEventListener("click", () => {
      isCleared = false;
    });

    this.multiplyBtn?.addEventListener("click", () => {
      isCleared = false;
    });

    this.divideBtn?.addEventListener("click", () => {
      isCleared = false;
    });

    this.equalsBtn?.addEventListener("click", () => {
      isCleared = false;
    });

    this.numberBtnsArray.forEach((btn) => {
      btn.addEventListener("click", () => {
        isCleared = false;
      });
    });
  }
}
