const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question((limit) => {
  generatePythagoreanTriplets(limit);
  rl.close();
});

function generatePythagoreanTriplets(limit) {
  console.log("Pythagorean Triplets smaller than", limit, ":");
  for (let a = 1; a < limit; a++) {
    for (let b = a; b < limit; b++) {
      let c = Math.sqrt(a * a + b * b);
      if (c > limit) break;
      if (c === Math.floor(c)) {
        console.log(a, b, c);
      }
    }
  }
}
