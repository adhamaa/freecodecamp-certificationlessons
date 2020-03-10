function sumPrimes(num) {
  let nums = Array.from({ length: num + 1 })
    .map((_, i) => i)
    .slice(2);
  for (let n in nums) {
    nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
  }
  return nums.reduce((prevSum, cur) => prevSum + cur);
}
// test here
console.log(sumPrimes(10));


