function myReplace(str, before, after) {
  if (before.match(/^[A-Z]/)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

    console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
    console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
    console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
    console.log(myReplace("His name is Tom", "Tom", "john"));
    console.log(myReplace("Notice me senpai", "senpai", "Brother"));