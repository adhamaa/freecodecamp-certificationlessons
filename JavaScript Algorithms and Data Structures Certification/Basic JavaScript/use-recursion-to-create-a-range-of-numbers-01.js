function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
   return [startNum]; 
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;

  }
  
};
console.log(rangeOfNumbers(1, 5));