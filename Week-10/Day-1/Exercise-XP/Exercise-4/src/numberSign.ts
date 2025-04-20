const numberSign = (nbr: number): string => {
  if (nbr > 0) {
    return `The number ${nbr} is positive`;
  } else if (nbr === 0) {
    return `The number ${nbr} is zero`;
  } else {
    return `The number ${nbr} is negative`;
  }
};

let a: number = 12;
let b: number = 0;
let c: number = -12;
console.log(numberSign(a));
console.log(numberSign(b));
console.log(numberSign(c));
