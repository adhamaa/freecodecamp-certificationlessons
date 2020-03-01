function whatIsInAName(collection, source) {
  // What's in a name?  
  return collection
    .filter((obj) => JSON.stringify(Object.assign(JSON.parse(JSON.stringify(obj)), source)) === JSON.stringify(obj));
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