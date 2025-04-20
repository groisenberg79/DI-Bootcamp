"use strict";
const getDetails = (pName, age) => {
    return [pName, age, `Hello ${pName}! You are ${age} years old.`];
};
console.log(getDetails("Mary", 45));
