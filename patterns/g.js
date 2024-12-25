var PromptSync = require("prompt-sync")();

var size = PromptSync(`enter the size \n`);
pattern = "";
halfSize = Math.round(size / 2);
remainder = size % 2;

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
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
