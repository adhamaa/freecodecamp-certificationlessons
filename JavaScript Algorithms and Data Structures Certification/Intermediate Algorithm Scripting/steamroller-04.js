function steamrollArray(arr) {

 for(var i = 0; i <=arr.length; i++) {
     arr = arr.reduce(function(a, b) {
       return a.concat(b);
     },[]);
}
return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
