// function addElement() {
//   // create a new p element
//   var newParagraph = document.createElement("p");
//   // and give it some content
//   var newContent = document.createTextNode("Hi there and greetings!");
//   // add the text node to the newly created p
//   newParagraph.appendChild(newContent);
//   // add the newly created element and its content into the DOM
//   var currentBody = document.getElementById("body");
//   document.body.appendChild(newParagraph);
// }
// addElement();

// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 }
// ];

// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges); // 64

// let vals = [5, 4, 9, 1, 2];

// let sum = vals.reduce((acc, val) => acc + val);
// let lowest = vals.reduce((acc, val) => (acc < val ? acc : val));
// let biggest = vals.reduce((acc, val) => (acc > val ? acc : val));
// let average = sum / vals.length;

// function total() {
//   let val = 0;
//   for (i = 0; i < arguments.length; i++) {
//     val += arguments[i];
//   }
// }

// console.log(sum);
// console.log(lowest);
// console.log(biggest);
// console.log(average);
// console.log(vals[0]);

// let person = new object();
// person.name = "adham";
// person.age = "27";
// console.log(person.name);

// const myArr = [1, 4, 5, 3, 7, 8, 6, 9];

// const squareList = arr =>
//   arr.reduce(function(sqrIntegers, num) {
//     if (num > 5) {
//       return sqrIntegers.concat(Math.pow(num, 2));
//     }
//     return sqrIntegers;
//   }, []);
// const squaredIntegers = squareList(myArr);

// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 }
// ];

// const soa = nVal =>
//   nVal.reduce(function(sum, user) {
//     return nVal;
//   }, []);
// const sumOfAges = soa(users);

// // console.log(squaredIntegers);
// console.log(sumOfAges);

/* // the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
}); */

// function sumAll(arr) {
//   return arr.reduce((initial, secondValue) => {
//     let count = 0;
//     // console.log(initial, secondValue);
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//       // console.log(...arr);
//       count += i;
//     }
//     return count;
//   });
// }

// console.log(sumAll([10, 5]));

function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  let srcKeys = Object.keys(source);
  let srcVals = Object.values(source);
  // Only change code below this line
  return collection.filter(i => {
    return srcKeys.forEach(j => {});
  });

  // Only change code above this line
  return arr;
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

// var ns = [1, 2, 3, 4, 5];
// var filtered = ns.filter(num => num !== 2);
// console.log("ns:", ns);
// console.log("filtered:", filtered);

function destroyer(arr, ...vRemove) {
  // Remove all the values
  var filtered = arr.filter(val => {
    return !vRemove.includes(val);
  });
  return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
