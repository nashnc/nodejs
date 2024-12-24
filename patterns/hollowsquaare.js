var PromptSync = require("prompt-sync")();

var size = PromptSync(`enter the size \n`);
pattern = "";
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (i == 0 || i == size - 1 || j == 0) {
      pattern += "* ";
    } else if (j == size - 1 && j > Math.round(size / 2)) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
