function sumFibs(num) {
  if(num < 0) {
    return undefined;
  }
  var sumOdds = 0; // Sum of all odd fib numbers
  for(var n1 = 0, n2 = 1, temp; n2 <= num; temp = n2, n2 += n1, n1 = temp) {
    sumOdds += n2 * (n2 % 2);
  }
  return sumOdds;
}

console.log(sumFibs(4));
