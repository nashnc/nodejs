/**JavaScript Program to Find LCM */

var prompt = require("prompt-sync")();

var number1 = prompt(`FIRST NUMBER`);
var number2 = prompt(`second NUMBER`);

var min = number1 > number2 ? number1 : number2;

while (true) {
  if (min % number1 == 0 && min % number2 == 0) {
    console.log(`the lcm is${min}`);
    break;
  }
  min++;
}
