function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
