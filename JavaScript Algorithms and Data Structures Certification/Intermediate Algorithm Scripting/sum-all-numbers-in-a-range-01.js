function sumAll(arr) {
  let count = 0;
  let mx = Math.max(...arr);
  let mn = Math.min(...arr);
  for (let i = mn; i <= mx; i++) {
    count +=i;
  }
  return count;
}


console.log(sumAll([1, 4]));