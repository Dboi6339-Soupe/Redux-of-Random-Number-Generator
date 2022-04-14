// Picks a random number between "x" and "y".
function randNum(x, y) {
  console.log(Math.floor((Math.random() * y) + x));
}

randNum(1, 100);