var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return arr.map(n => n).sort();

  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));