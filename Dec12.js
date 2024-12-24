/**prtining
 * *
 * **
 * ***
 * ****
 */
var prompt = require("prompt-sync")();

var limit = prompt("How many more times? ");
//var limit = 7;
var star = "* ";
for (let i = 1; i <= limit; i++) {
var line = "";
  
  for (let j = 0; j < i; j++) {
    line += star;
  }
      console.log(line);

  //line+="\n"
}

/**
 *       *
 *      **
 *     ***
 *    ****
 *   *****
 */
