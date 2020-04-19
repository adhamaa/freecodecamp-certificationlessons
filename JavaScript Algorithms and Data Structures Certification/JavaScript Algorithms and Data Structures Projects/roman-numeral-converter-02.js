function convertToRoman(num) {
    // adapted from http://rapidtables.com/convert/number/how-number-to-roman-numerals.htm

    var map = [
        { d: 1, r: 'I' },
        { d: 4, r: 'IV' },
        { d: 5, r: 'V' },
        { d: 9, r: 'IX' },
        { d: 10, r: 'X' },
        { d: 40, r: 'XL' },
        { d: 50, r: 'L' },
        { d: 90, r: 'XC' },
        { d: 100, r: 'C' },
        { d: 400, r: 'CD' },
        { d: 500, r: 'D' },
        { d: 900, r: 'CM' },
        { d: 1000, r: 'M' }
    ];

    var roman = '';

    while (num > 0) {

        // highest mapped decimal less than or equal num
        var max = map[0];
        map.forEach((el) => {
            if (el.d <= num) {
                max = el;
            }
        });
        
        roman += max.r;
        num -= max.d;
        
    }

    return roman;
}

console.log(convertToRoman(36));
