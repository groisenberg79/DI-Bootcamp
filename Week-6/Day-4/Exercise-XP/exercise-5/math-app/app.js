const m = require("./math.js");
const _ = require("lodash");

const customSum = m.add(10, 5);
const customProduct = m.multiply(6, 4);

const lodashSum = _.add(10, 5);
const lodashProduct = _.multiply(6, 4);

console.log(`Custom Add: ${customSum}`);
console.log(`Custom Multiply: ${customProduct}`);
console.log(`Lodash Add: ${lodashSum}`);
console.log(`Lodash Multiply: ${lodashProduct}`);
