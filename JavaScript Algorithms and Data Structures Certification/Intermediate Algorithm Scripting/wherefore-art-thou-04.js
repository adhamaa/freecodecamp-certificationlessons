function whatIsInAName(collection, source) {
  // What's in a name?
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (var i in source) {
      if (source[i] !== obj[i]) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" }, //collection[0]
      { first: "Mercutio", last: null }, //collection[1]
      { first: "Tybalt", last: "Capulet" } //collection[2]
    ],
    { last: "Capulet" }
  )
);