const calculator = [
  {
    id: 1,
    fun(a, b) {
      console.log(`\n\n the sum of ${a} + ${b} is ${a + b}\n`);
    },
  },
  {
    id: 2,
    fun(a, b) {
      console.log(`\n the product of ${a} x ${b} is ${a * b}\n`);
    },
  },
  {
    id: 3,
    fun(a, b) {
      console.log(`\n the difference  between  ${a} - ${b} is ${a - b}\n`);
    },
  },
  {
    id: 4,
    fun(a, b) {
      b == 0
        ? console.log(`\ncannot divide by zero(0)\n`)
        : console.log(`\n the sum of ${a} / ${b} is ${a / b}\n`);
    },
  },
  {
    id: 5,
    fun(a, b) {
      console.log(`\n ${a} power ${b} is ${a ** b}\n`);
    },
  },
  {
    id: 6,
    fun(a, b) {
      console.log(`\n the remainder of ${a} and  ${b} is ${a % b}\n`);
    },
  },
];

module.exports = calculator;
