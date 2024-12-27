var prompt = require("prompt-sync")();

var size = prompt(`the size of letter "G" that you want to print\n`);
pattern = "";
halfSize = Math.round(size / 2);
remainder = size % 2;
last1 = size - 1;
last2 = size - 2;
if (size <= 5) {
  console.log(`please enter valuse above 5`);
} else {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0) {
        pattern += "* ";
      } else if (j == size - 1 && i >= halfSize - 1 && remainder != 0) {
        pattern += "* ";
      } else if (j == size - 1 && i >= halfSize && remainder == 0) {
        pattern += "* ";
      } else if (
        remainder != 0 &&
        i == halfSize - 1 &&
        (j == i || j > halfSize - 1)
      ) {
        pattern += "* ";
      } else if (remainder == 0 && i == halfSize && (j == i || j > halfSize)) {
        pattern += "* ";
      } else if (
        (j == last1 && i == 1) ||
        (size > 6 && remainder == 0 && i == halfSize + 1 && j == i - 1) ||
        (remainder == !0 && i == halfSize && j == halfSize - 1)
      ) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
}
