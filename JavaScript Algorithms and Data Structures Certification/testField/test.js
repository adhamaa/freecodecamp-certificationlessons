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

// function dropElements(arr, func) {
//   var times = arr.length;
//   console.log("times:", times);
//   for (var i = 0; i < times; i++) {
//     console.log("arr[0]:", arr[0]);
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }

// console.log(
//   dropElements([1, 2, 3], function (n) {
//     console.log("n:", n);
//     return n < 3;
//   })
// );
// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     console.log("n:", n);
//     return n === 1;
//   })
// );
// console.log(
//   dropElements([1, 2, 3, 9, 2], function (n) {
//     console.log("n:", n);
//     return n > 2;
//   })
// );

// function printName(options) {
//   const defaults = {
//     firstName: "Steve",
//     lastName: "Bottle",
//   };
//   options = Object.assign(defaults, options);

//   console.log(`${options.firstName} ${options.lastName}`);
// }

// printName({ lastName: "Bamboozle" });

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

// function convertToRoman(num) {
//   var map = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   var roman = "";
//   for (var i in map) {
//     console.log("i:", i);

//     while (num >= map[i]) {
//       // roman += i;
//       console.log("roman += i:", (roman += i));
//       // num -= map[i];
//       console.log("num -= map[i]:", (num -= map[i]));
//     }
//   }

//   return roman;
// }

// //test
// console.log(convertToRoman(1));

// function compareTriplets(a, b) {
//   let result = [];
//   let aCount = 0;
//   let bCount = 0;
//   a.forEach((i, j) => {
//     console.log("i:", i);
//     console.log("j:", j);
//     i === j ? null : i > j ? aCount++ : bCount++;
//   });
//   result = [aCount, bCount];
//   return result;
// }

// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// function aVeryBigSum(ar) {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum;
//   // return ar.reduce((acc, curr) => acc + curr);
// }

// console.log(
//   aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
// );

// function plusMinus(arr) {
//   let n = arr.length,
//     positive = 0,
//     negative = 0,
//     zero = 0;
//   arr.forEach((i) => {
//     if (i > 0) {
//       positive++;
//     } else if (i < 0) {
//       negative++;
//     } else {
//       zero++;
//     }
//   });
//   let pos = (positive / n).toFixed(6),
//     neg = (negative / n).toFixed(6),
//     zer = (zero / n).toFixed(6);

//   console.log(pos + "\n" + neg + "\n" + zer);
// }
// plusMinus([-4, 3, -9, 0, 4, 1]);

// function sstaircase(n) {
//   let i = 0;
//   while (i < n) {
//     i++;
//     let result = "";
//     let j = 0;
//     while (j < n) {
//       j++;
//       if (i < j + 1) {
//         result += ". ";
//       } else {
//         result += " ";
//       }
//     }
//     console.log(result);
//   }
// }
// sstaircase(15);

// function staircase(n) {
//   let height = n;
//   for (let i = 0; i < height; i++) {
//     let row = "";
//     for (let j = 0; j < height; j++) {
//       if (i + j >= height - 1) {
//         row += ". ";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }
//   for (let i = 0; i < height; i++) {
//     let row = "";
//     for (let j = 0; j < height; j++) {
//       if (i < j + 1) {
//         row += ". ";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }
// }
// staircase(15);

// function dstaircase(n) {
//   let i = 0;
//   while (i < n) {
//     i++;
//     let result = "";
//     let j = 0;
//     while (j < n) {
//       j++;
//       if (i + j > n) {
//         result += ". ";
//       } else {
//         result += " ";
//       }
//     }
//     console.log(result);
//   }
// }
// dstaircase(15);

// function starcase(n) {
//   var height = n;
//   for (let i = 0; i < height; i++) {
//     let row = "";
//     for (let j = 0; j < height; j++) {
//       i < j + 1 ? (row += ". ") : (row += " ");
//     }
//     console.log(row);
//   }
//   for (let i = 0; i < height; i++) {
//     let row = "";
//     for (let j = 0; j < height; j++) {
//       i + j >= height - 1 ? (row += ". ") : (row += " ");
//     }
//     console.log(row);
//   }
// }
// starcase(15);

// const operate = (arr) => {
//   let gen = Array.from({ length: arr + 1 }, (_, i) => i);
//   console.log(gen);
//   function isPrime(x) {
//     for (let i = 2; i < x; i++) {
//       if (x % i === 0) return false;
//     }
//     return x !== 1 && x !== 0;
//   }
//   gen.forEach((i) => (isPrime(i) ? i + " <++++++<" : i + " O"));
// };
// console.log(operate(13));

// function modulo(n) {
//   for (var i = 2; i < 20; i++) {
//     console.log(i + " --> " + (i % n));
//   }
// }
// modulo(3);

// function rot13(str) {
//   return str
//     .split("") // Split str into a character array
//     .map.call(str, (char) => {
//       // Iterate over each character in the array
//       var x = char.charCodeAt(0); // Convert char to a character code
//       // Checks if character lies between A-Z
//       return x < 65 || x > 90
//         ? String.fromCharCode(x)
//         : String.fromCharCode((x % 26) + 65);
//     })
//     .join(""); // Rejoin the array into a string
// }

// console.log(rot13("SERR PBQR PNZC"));

// function telephoneCheck(str) {
//   return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);
// }

// console.log(telephoneCheck("555-555-5555"));

// Create an array of objects which hold the denominations and their values
function checkCashRegister(price, cash, cid) {
  //declare and initialize variables
  var change = Math.round((cash - price) * 100);
  var value = 0;
  var changeRecord = [];
  var stats = null;
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  //convert all floats to integers due to floating point number issue
  cid.forEach((el) => (el[1] = Math.round(el[1] * 100)));
  //helper function to check if sufficient cash for change is in the drawer
  function enoughFund(cid) {
    var sum = cid.filter((el, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }

  //Actual program/control flow starts here
  if (enoughFund(cid) < change) return "Insufficient Funds";
  else if (enoughFund(cid) === change) return "Closed";
  else {
    for (var i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i]) {
        //update everything as long as condition is true
        change -= currency[i];
        cid[i][1] -= currency[i];
        //value keeps track of the amount of each currency unit as change
        value += currency[i];
      }
      if (value) changeRecord.push([cid[i][0], value]);
    }
  }
  //divide each array by 100 to display a proper money format
  changeRecord.forEach((el) => (el[1] = el[1] / 100));
  return { status: stats, change: changeRecord };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

var elements = [
  { type: "fire", power: 100 },
  { type: "water", power: 100 },
  { type: "earth", power: 100 },
  { type: "metal", power: 100 },
  { type: "wood", power: 100 },
];

for (var i in elements) {
  console.log(elements[i].type);
}
