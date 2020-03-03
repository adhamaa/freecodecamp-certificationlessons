function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins  
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.split(/(?:_| )+/).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));