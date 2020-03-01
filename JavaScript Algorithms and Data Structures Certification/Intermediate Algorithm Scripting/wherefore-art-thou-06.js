function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter((obj) => {
    var srcKeys = Object.keys(source); 
    var test = 0;
    for (var i in srcKeys) {
      if (obj.hasOwnProperty(srcKeys[i]) && 
      obj[srcKeys[i]] === source[srcKeys[i]]) {
        test += 1;
      } else {
        test += -1;
      }
    }
    return test === srcKeys.length;
  });
  // Only change code above this line
  return arr;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
);
