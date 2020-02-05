function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
