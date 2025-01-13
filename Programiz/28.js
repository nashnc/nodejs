var type = ["heart", "spade", "clover", "diamond"];

var values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "joker", "queen", "king"];
var cards = [];

for (i = 0; i < type.length; i++) {
  for (j = 0; j < values.length; j++) {
    cards.push(`${values[j]} of ${type[i]}`);
  }
}

for (k = 0; k < cards.length; k++) {
  randomCards = [];
  random = Math.floor(Math.random() * cards.length);
  l = random;
  let temp = cards[k];
  cards[k] = cards[l];
  cards[l] = temp;
}

for (m = 0; m < 5; m++) {
  console.log(`${cards[m]}`);
}
