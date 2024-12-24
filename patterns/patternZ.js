var prompt = require("prompt-sync")();

var limit = prompt('number of lines')
pattern = ""
for (i = 0; i < limit; i++) {
    for (j = 0; j < limit; j++) {
        if (i === 0 || i === limit - 1 || j === limit-i-1) {
            pattern += "* "
        }
        else {
            pattern += "  "
        }
    }
    pattern += "\n"
}

console.log(pattern);