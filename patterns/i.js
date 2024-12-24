var prompt = require("prompt-sync")();

var height = prompt('enter a height ,prefer odd numbber')
var pattern = ""

for (i = 0; i < height; i++) {
    for (j = 0;  j < height; j++) {
        if (i === 0 || i === height - 1 || j === (Math.round(height / 2))) {
            pattern+="* "
        }
        else {
            pattern+=" "
        }
    }
        pattern += "\n";

}
console.log(pattern);