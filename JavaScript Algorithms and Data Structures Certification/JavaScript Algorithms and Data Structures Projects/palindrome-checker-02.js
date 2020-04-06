function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("_eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("gang"));
