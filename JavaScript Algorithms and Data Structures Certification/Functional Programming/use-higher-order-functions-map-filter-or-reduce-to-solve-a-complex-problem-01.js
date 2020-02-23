const squareList = (arr) => {
  // only change code below this line
  return arr
  .filter(value => value > 0 && Number.isInteger(value))
  .map(value => value * value);
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
