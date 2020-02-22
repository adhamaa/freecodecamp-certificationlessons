// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(x){
  var newArray = [];
  // Add your code below this line
  this.forEach(function(item) {
    if (x(item) == true) {
      newArray.push(item);
    }
  })
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(x){
  return x % 2 === 1;
});
