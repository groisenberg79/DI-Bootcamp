// The first equality is false, because each occurance of [2]
// denotes a different  object, with a separate dedicated space 
// in memory. Note that the equality operator in JavaScript, when
// used to compare objects, always evaluates by reference, and 
// not content.
// 
// The second comparison should also be false (by the same
// reason the first one is), but for some reason unbeknownst to
// me, the console actually gives an SyntaxError. I'm told by
// Copilot that this is related to the console itself in JavaScript.
// 
// [2] === [2] 
// {} === {}


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
// -- The value of 'number' in object1 is 4, because of the statement above;
// -- The value of 'number' in object2 is also 4, because object2 and object1 denote the same object;
// -- the value of 'number' in object3 is also 4, because object3 and
// object2 denote the same object;
// -- the  value of 'number' in object4 is 5 by definition.
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(sound_type){
        console.log(`${sound_type} I'm a ${this.type} named ${this.name}, and I'm ${this.color}.`)
    }
    
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
farmerCow.sound('Moooo');
