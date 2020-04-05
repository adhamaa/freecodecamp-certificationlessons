  function steamrollArray(arr) {
       // 1
      var tmp =  JSON.stringify(arr);
      //2
      tmp = tmp.match(/([^\[\],\s]+)/g);
      //3
     tmp = JSON.parse( "["+tmp.join(',')+"]" );
     return tmp;
    }

console.log(steamrollArray([1, [2], [3, [[4]]]]));
