function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
 return newArr = [...arr1,...arr2]
    .filter(x => arr1.indexOf(x) < 0 || arr2.indexOf(x) < 0);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
