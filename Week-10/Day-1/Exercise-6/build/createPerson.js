"use strict";
let person;
const createPerson = (pName, age) => {
    return (person = {
        name: pName,
        age: age,
    });
};
console.log(createPerson("John", 45));
