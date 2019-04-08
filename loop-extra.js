
var input = 1;
var limit = 9999;
var accumulator = input;

var count = 0;
while (accumulator < limit) {
  accumulator += input;
  count++;
}

console.log(`per arrivare a ${limit} ci sono volute ${count} iterazioni ed e stato raggiunto il valore di ${accumulator}`);
