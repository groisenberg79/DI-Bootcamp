// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
funcOne()
// result: the alert appears as 'inside the funcOne function as 3'.
// That occurs because the 'a' is declared in a higher scope position
// within funcOne, having scope over the if-statement.

// #1.2 What will happen if the variable is declared 
// with const instead of let ? Asnwer: it would give an error, since 
// variables declared const cannot be reassigned.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree()
funcTwo()
funcThree()
// Result: we would get
// 
//  "inside the funcThree function 0"
//  "inside the funcThree function 5"
//
// That happens because the variable "a" has scope over all its tokens
// inside its scope, which includes its tokens inside funcTwo. This is
// not a logical necessity, but a characteristic of JS; other languages 
// are more strict when it comes to this type of binding (e.g. C).
//
// #2.2 What will happen if the variable is declared 
// with const instead of let ? Answer: it would give an error, since 
// variables declared const cannot be reassigned.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// funcFour()
funcFive()
// Running the code, the call for funcFour gives an error since
// there is no class named 'window' whose attrubute is 'a' -- so
// it doesn't even get to funcFive. If we were to comment the 
// funcFour call, funcFive would print "inside the funcThree function 5",
// given that 'a' is still bound to 5 in memory.

//#4
const a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

funcSix()
// Assuming funcFour has been commented out (otherwise we would just 
// get another error), we would get another error, since a variable
// declared via 'let' cannot be redeclared. Somewhat surprisingly, the 
// declaration inside funcSix does not produce a error: in this case, 
// JS interprets this declaration as a brand new variable restricted 
// to the scope of funcSix (with its won space in memory), and not as
// another declaration of 'a'. 

// #4.2 What will happen if the variable is declared 
// with const instead of let ? Answer: contrary to what happened 
// inside the function scope, JS would interpret it as 'a' being 
// redeclared; that's because the are in the same scope, thus occupying
// the same namespace.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// With the previus code intact, this would give us an error,
// since this would be a redeclaration of 'a'. Commenting the 
// previous code, we would obtain:
//
// "in the if block 5"
// "outside of the if block 2"
//
// The reason is the same as before: 'a' declared within function
// scope is considered a new variable.

// #5.2 What will happen if the variable is declared 
// with const instead of let ? We would still get an error, for the
// aforementioned reason -- redeclaration.

