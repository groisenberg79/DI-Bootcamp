"use strict";
const numberSign = (nbr) => {
    if (nbr > 0) {
        return `The number ${nbr} is positive`;
    }
    else if (nbr === 0) {
        return `The number ${nbr} is zero`;
    }
    else {
        return `The number ${nbr} is negative`;
    }
};
let a = 12;
let b = 0;
let c = -12;
console.log(numberSign(a));
console.log(numberSign(b));
console.log(numberSign(c));
