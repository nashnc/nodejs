var prompt = require("prompt-sync")();

var size = prompt(`the size of letter "C" that you want to print\n`);
pattern = "";
last1 = size - 1;
last2 = size - 2;
if (size <= 3) {
  console.log(`enter above 3 \n`);
}
else{
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0) {
        pattern += 
        "* ";
      } else if ((i == 1 && j == last1) || (i == last2 && j == last1)) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
}