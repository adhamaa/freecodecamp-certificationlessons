// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(x){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
   if (x(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(x){
  return x % 2 === 1;
});
