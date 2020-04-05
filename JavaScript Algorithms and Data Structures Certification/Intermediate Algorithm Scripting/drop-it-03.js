function dropElements(arr, func) {
    return arr.length && !func(arr[0])
        ? (dropElements(arr.slice(1), func))
        : arr;
}



// test here
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));