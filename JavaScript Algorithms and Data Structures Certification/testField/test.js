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

let vals = [5, 4, 9, 1, 2];

let sum = vals.reduce((acc, val) => acc + val);
let lowest = vals.reduce((acc, val) => (acc < val ? acc : val));
let biggest = vals.reduce((acc, val) => (acc > val ? acc : val));
let average = sum / vals.length;

console.log(sum);
console.log(lowest);
console.log(biggest);
console.log(average);

// let person = new object();
// person.name = "adham";
// person.age = "27";
// console.log(person.name);
