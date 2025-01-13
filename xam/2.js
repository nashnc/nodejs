var prompt = require("prompt-sync")();

var number = prompt(`enteer a positive number`);

table = 1;
i = 1;
limit = 10;
while (i <= 10) {
  table = `${i} x ${number}  = ${number * i} \n`;
  console.log(table);
  i++;
}
