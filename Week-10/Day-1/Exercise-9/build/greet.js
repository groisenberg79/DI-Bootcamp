"use strict";
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello, stranger!";
    }
}
console.log(greet("Gabriel"));
console.log(greet());
