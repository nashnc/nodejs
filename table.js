var prompt = require("prompt-sync")();

var number = prompt('enter a nuumber')
var limit = prompt('enter a  limit')
var i = 1, table = 1
 /*
while (i <= limit) {
    table = i*number
    console.log(` ${i} * ${number} = ${table}`);
    i++
}*/
for (i = 1; i <= limit; i++){
     table = i * number;
     console.log(` ${i} * ${number} = ${table}`);
}

