var prompt = require("prompt-sync")();

var number = prompt("enter the number");
length = number.length;

let temp = number,
  sum = 0;

while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder ** length;
  temp = Math.floor(temp / 10);
}
number == sum
  ? console.log(`the numner ${number} is Armstrong `)
  : console.log(` the number ${number} is not Armstrong `);
