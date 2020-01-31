function reverseString(str) {
  let reversedStr = ""; 
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
  return str;
}

console.log(reverseString("hello campers"));
