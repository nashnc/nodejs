var prompt = require("prompt-sync")();

var number = prompt("enter the number ");

isPrime = true;
if (number === 1) {
  console.log("1 is a prime number");
} else {
  for (i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
    isPrime ? console.log("the number is prime") : console.log("not prime");

}