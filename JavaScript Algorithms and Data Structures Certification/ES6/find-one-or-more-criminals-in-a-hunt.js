// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /c+/ig; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
