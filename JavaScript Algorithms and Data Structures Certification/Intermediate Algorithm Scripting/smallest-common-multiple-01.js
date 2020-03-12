
function smallestCommons(arr) {
  // Euclidean algorithm for the greatest common divisor.
  // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // range
  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}


console.log(smallestCommons([1,5]));
