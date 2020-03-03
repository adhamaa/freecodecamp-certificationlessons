function translatePigLatin(str) {
  return str.match(/^[^aeiou]+/) !== null 
    ? str
    .replace(/^[^aeiou]+/, '')
    .concat(str.match(/^[^aeiou]+/))
    .concat('ay')
    : str.concat('way');
}
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));