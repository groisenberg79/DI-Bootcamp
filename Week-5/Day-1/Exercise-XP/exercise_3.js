const isString = (obj) => {
    if (typeof obj === 'string'){
        return true;
    }
    else return false;
}

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false