const squareList = arr => 
  // only change code below this line
  arr
  .filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2));
  // only change code above this line
;

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
