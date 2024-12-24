var prompt = require("prompt-sync")();

var limit = prompt("number of lines");
pattern = "";
for (i = 0; i < limit; i++) {
  for (j = 0; j < limit; j++) {
    if (j === 0 || j === limit - 1 || i == j) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
