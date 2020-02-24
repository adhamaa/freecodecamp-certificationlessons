function sumAll(arr) {
  return arr.reduce(function(initial, secondValue){
    var sumOfNumbers = 0;
     for(var i = Math.min(initial, secondValue); i <= Math.max(initial, secondValue); i++ )    {
         sumOfNumbers += i;
     }
    
      return sumOfNumbers;
  });
}



console.log(sumAll([1, 4]));