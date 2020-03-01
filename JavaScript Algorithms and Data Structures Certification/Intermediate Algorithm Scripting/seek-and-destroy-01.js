function destroyer(arr, ...vRemove) {
  // Remove all the values
 return arr.filter(val => !vRemove.includes(val));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
