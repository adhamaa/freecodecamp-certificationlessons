function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  let maxLength = arr.length;
    for (let i = 0; i < maxLength; i += size) {
      newArr.push(arr.slice(i, i + size));
      
}

  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
