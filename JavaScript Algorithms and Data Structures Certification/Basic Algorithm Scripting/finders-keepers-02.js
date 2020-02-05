function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
