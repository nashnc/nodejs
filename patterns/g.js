var PromptSync = require("prompt-sync")();

var size = PromptSync(`enter the size \n`);
pattern = "";
hSize = Math.round(size / 2);
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (i == 0 || i == size - 1 || j == 0) {
      pattern += "* ";
    } else if (j == size - 1 && i >= hSize - 1 && size % 2 != 0) {
      pattern += "* ";
    } else if (j == size - 1 && i >= hSize && size % 2 == 0) {
      pattern += "* ";
    } else if (size % 2 != 0 && i == hSize - 1 && (j == i || j > hSize - 1)) {
      pattern += "* ";
    } else if (size % 2 == 0 && i == hSize && (j == i || j > hSize)) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
