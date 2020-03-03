function spinalCase(str) {
// Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

// Replace space and underscore with -
  return str
  .replace(/\s+|_+/g, "-")
  .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));