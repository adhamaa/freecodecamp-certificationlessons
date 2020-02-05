function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

console.log(getIndexToIns([40, 60], 50));
