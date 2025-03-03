
// item 1
// function kgToGrams (kg){
//     return kg * 1000;
// }
// console.log(kgToGrams(23));

// item 2
// const kgToGrams = function (kg){
//     return kg *1000;
// }
// console.log(kgToGrams(23));

// item 3
// in a function declaration, the function receives a name 
// and is evoked through this name, while in a function expression, 
// the function is stored in a variable, does not receive a name and 
// is called via the variable's name.

// item 4
const kgToGrams = (kg) => {
    return kg * 1000;
}
console.log(kgToGrams(23));