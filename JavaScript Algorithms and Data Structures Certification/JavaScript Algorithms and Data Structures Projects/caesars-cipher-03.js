function rot13(str) {
  return str
    .split("") // Split str into a character array
    .map.call(str, (char) => {
      // Iterate over each character in the array
      var x = char.charCodeAt(0); // Convert char to a character code
      // Checks if character lies between A-Z
      return x < 65 || x > 90
        ? String.fromCharCode(x)
        : String.fromCharCode(((x - 65 + 13) % 26) + 65);
    })
    .join(""); // Rejoin the array into a string
}

console.log(rot13("SERR PBQR PNZC"));
