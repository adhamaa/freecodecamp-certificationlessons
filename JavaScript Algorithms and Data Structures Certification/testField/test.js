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

const squareList = arr => {
  // only change code below this line
  return arr.reduce(
    function(sqrIntegers, num) /* #1 arr(callback) */ {
      sqrIntegers.concat(num => {
        if (num >= 5) {
          return sqrIntegers.concat(Math.pow(num, 2));
        }
      });
    },
    /* #2 arr(initial value) */
    []
  );
  // only change code above this line
};
// test your code
const squaredIntegers = squareList(/* [-3, 4.8, 5, 3, -3.2] */ [5, 4, 9, 1, 2]);
console.log(squaredIntegers);

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
