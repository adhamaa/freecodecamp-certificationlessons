function convertHTML(str) {
    // Split by character to avoid problems.
    const re  = /(&|<|>|"|')/g;
    // Since we are only checking for a few HTML elements, use a switch
  
    return str.replace(re, char => {
      switch (char) {
        case "<": return "&lt;";
        case "&": return "&amp;";
        case ">": return "&gt;";
        case '"': return "&quot;";
        case "'": return "&apos;";
      }
    });
  }



console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
