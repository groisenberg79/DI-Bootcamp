class Person {
    constructor(name) {
      this.name = name;
    }
  }
// Since classes are object-constructors and 'member' is a token of
// the class Person, 'member' is an object. Every non-primitive type 
// in JavaScript is an 'object'; however, the 'typeof' operator
// recognizes two non-primitive types: object and functions. 
// In reality, even functions are objects. Conclusion:
// the output will be 'object'.
const member = new Person('John');
console.log(typeof member);
