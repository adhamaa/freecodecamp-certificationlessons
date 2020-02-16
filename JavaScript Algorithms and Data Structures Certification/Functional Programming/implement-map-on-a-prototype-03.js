// The global Array
var s = [23, 65, 98, 5];
// Add your code below this line

Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};
  // Add your code above this line

var new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(Array.prototype.myMap());