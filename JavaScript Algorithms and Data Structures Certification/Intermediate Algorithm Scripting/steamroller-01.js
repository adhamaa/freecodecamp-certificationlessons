function steamrollArray(arr) {
  let result = [];
  function rec(arr) {
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      if (Array.isArray(elem)) {
        rec(elem);
      } else {
        result.push(elem);
      }
    }
  }
  rec(arr);
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
