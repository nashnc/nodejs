const prompt = require("prompt-sync")();

class Calculator {
  result() {
    this.result = 0;
  }
  addtion(a, b) {
    return (this.result = a + b);
  }

  multiplication(a, b) {
    return (this.result = a * b);
  }
  differece(a, b) {
    return (this.result = a - b);
  }
  divison(a, b) {
    return (this.result = a / b);
  }

  displayResult() {
    console.log(`\t ${this.result}`);
  }
}

console.log(
  `1 - Addition\n 2- Multipilication \n 3 - Substraction \n 4 - Division`
); //choice
let operation = parseInt(prompt("Enter the operation number: "));

if ([1, 2, 3, 4].includes(operation)) {
  let numer1 = parseFloat(prompt("Enter the first number: "));
  let numer2 = parseFloat(prompt("Enter the second number: "));
  if (operation == 4 && numer2 == 0) {
    console.log(`error cannot divide by zero `);
  } else {
    let calculator = new Calculator();
    operation == 1
      ? calculator.addtion(numer1, numer2)
      : operation == 2
      ? calculator.multiplication(numer1, numer2)
      : operation == 3
      ? calculator.differece(numer1, numer2)
      : calculator.divison(numer1, numer2);
    calculator.displayResult();
  }
} else {
  console.log("Please enter a valid operation  number.");
} //enter valid choixc
