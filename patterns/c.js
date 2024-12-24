var prompt = require("prompt-sync")();

var size = prompt(`the size of letter "C" that you want to print\n`);
pattern = "";
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (i == 0 || i == size - 1 || j == 1) {
      pattern += "* ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
