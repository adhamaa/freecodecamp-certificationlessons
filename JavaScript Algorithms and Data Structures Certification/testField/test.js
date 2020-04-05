// const logo = document.querySelectorAll("#logo-proton > path");
// console.log("logo:", logo);
// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

// const yoga = document.querySelectorAll("#yoga > path");
// console.log("yoga:", yoga);

// for (let j = 0; j < yoga.length; j++) {
//   console.log(`Letter ${j} is ${yoga[j].getTotalLength()}`);
// }

function dropElements(arr, func) {
  var times = arr.length;
  console.log("times:", times);
  for (var i = 0; i < times; i++) {
    console.log("arr[0]:", arr[0]);
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3], function(n) {
    console.log("n:", n);
    return n < 3;
  })
);
console.log(
  dropElements([0, 1, 0, 1], function(n) {
    console.log("n:", n);
    return n === 1;
  })
);
console.log(
  dropElements([1, 2, 3, 9, 2], function(n) {
    console.log("n:", n);
    return n > 2;
  })
);

// Return each strand as an array of two elements, the original and the pair.
// var paired = [];

// Function to check with strand to pair.
// var search = function(str) {
//   switch (str) {
//     case 0:
//       paired.push("123");
//       break;
//     case 1:
//       paired.push(1);
//       break;
//     case 2:
//       paired.push(2);
//       break;
//     case 3:
//       paired.push(3);
//       break;
//   }

//   // Loops through the input and pair.
//   for (let i = 0; i < str.length; i++) {
//     search(str.indexOf(str[i]));
//     console.log('str.indexOf("ADHAM"):', str.indexOf("ADHAM"));
//   }

//   return paired;
// };

// console.log(search("adham akmal bin azmi"));
// console.log();

//using Switch case statements
//An alternative to if statements
//use when you have a long list of values to compare

// let fetch = () => {
//   let codes = [
//     { code: 200, text: "Ok" },
//     { code: 201, text: "Created" },
//     { code: 304, text: "Not Modified" },
//     { code: 400, text: "Bad Request" },
//     { code: 401, text: "Unauthorized" },
//     { code: 403, text: "Forbidden" },
//     { code: 404, text: "File Not Found" },
//     { code: 405, text: "Method Not Allowed" },
//     { code: 500, text: "Internal Server Error" },
//     { code: 503, text: "Service Unavailable" },
//     { code: 600, text: "Not a real code" }
//   ];
//   let num = Math.floor(Math.random() * codes.length);
//   console.log("codes:", codes);
//   console.log("first code: ", codes[0].code);
//   console.log("num:", num);
//   return codes[num];
// };

// let response = fetch();
// console.log("response.code:", response.code);
// console.log("response.text:", response.text);
// // console.log(response);
// switch (response.code) {
//   case 200:
//   case 201:
//     console.log("All is good", response.text);
//     break;
//   case 304:
//     console.log("Redirect", response.text);
//     break;
//   case 400:
//   case 401:
//   case 403:
//   case 404:
//   case 405:
//     console.log("Problem", response.text);
//     break;
//   case 500:
//   case 503:
//     console.log("Server Error", response.text);
//     break;
//   default:
//     console.log(response.code, response.text);
// }

// let name = response.text;
// switch (name.length) {
//   case 3:
//     console.log("what a short name");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("medium short name");
//     break;
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log("WOW! what along name");
//     break;
//   default:
//     console.log("The f**k!");
// }

// function pairElement(str) {
//   //create object for pair lookup
//   var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   //split string into array of characters
//   var arr = str.split("");
//   console.log("arr:", arr);
//   //map character to array of character and matching pair
//   return arr.map(x => {
//     return [x, pairs[x]];
//     console.log("pairs[x]:", pairs[x]);
//   });
// }

// console.log(pairElement("GCG"));

// function smallestCommons(arr) {
//   const gcd = (a, b) => {
//   while (a !== b ){
//       if (a > b) {
//           a -= b;
//       } else {
//           b -= a;
//       }
//   }
//   return a
// };

// console.log(smallestCommons([1,5]));
