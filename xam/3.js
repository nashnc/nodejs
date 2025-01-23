var prompt = require("prompt-sync")();

var array = [
  {
    id: 1,
    name: "rajesh",
  },
  {
    id: 2,
    name: "rahul",
  },
  {
    id: 3,
    name: "sruthi",
  },
];

var length = array.length; // get length of array
console.log(` number of data available ${length}\n `);
var number = prompt(`enter a number\n`); //input from user
number < length && number > 0
  ? proceed(number)
  : console.log(
      `enter a number under the number of data available \n currently \t ${length}\t data available`
    );

function proceed(number) {
  for (i = 0; i < length; i++) {
    if (array[i].id == number) {
      console.log(array[i].name);
    }
  }
}
