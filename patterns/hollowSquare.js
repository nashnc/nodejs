var prompt = require("prompt-sync")();

var size = prompt(" enter the size of the hollow square  \n");
pattern = "";
last1 = size - 1;

for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (i == 0 || j == 0 || i == last1 || j == last1) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
