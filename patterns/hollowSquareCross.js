var prompt = require("prompt-sync")();

var size = prompt(
  " enter the size of the square \n, enter an odd number \n, that is greater than 5 \n"
);
pattern = "";
remainder = size % 2;
last1 = size - 1;

var output = () => {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (
        i == 0 ||
        j == 0 ||
        i == last1 ||
        j == last1 ||
        i == j ||
        i == last1 - j
      ) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
  console.log(pattern, "\n");
};

size < 5
  ? console.log(`enter a  size gerater than 4\n`)
  : remainder == 0
  ? console.log(`enter an odd number please \n`)
  : output();
