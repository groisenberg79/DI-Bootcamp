"use strict";
function validateUnionType(value, allowedTypes) {
    const actualType = typeof value;
    return allowedTypes.includes(actualType);
}
const pName = "Gabriel";
const age = 45;
const active = true;
const data = [1, 2, 3];
const sayHi = () => console.log("hi");
console.log(validateUnionType(pName, ["string", "number"])); // true
console.log(validateUnionType(age, ["boolean"])); // false
console.log(validateUnionType(active, ["boolean"])); // true
console.log(validateUnionType(data, ["object"])); // true (arrays are 'object')
console.log(validateUnionType(sayHi, ["function"])); // true
