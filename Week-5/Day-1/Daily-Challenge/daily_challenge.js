let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

function displayGroceries(){
    groceries['fruits'].forEach(element => {
        console.log(element);
    });
}

// displayGroceries();

// changes to the client variable will be tracked by the user variable
// (despite the fact that this is a pass by value variable assignment)
// because user has function scope, and so each time the function
// is called, this variable gets declared and initialized all over again.
// Obviously, the same wouldnt be true if user had global scope.

// in the case of the shooping variable, every change to the groceries 
// variable will be tracked because this is a pass by reference variable
// assignment.
function cloneGroceries(){
    let user = client;
    console.log(user);
    let shopping = groceries;
    console.log(shopping['totalPrice']);
    console.log(shopping['other']['paid']);
}

console.log(client);
cloneGroceries();
client = 'Betty';
cloneGroceries();

console.log(groceries['totalPrice']);
cloneGroceries();
groceries['totalPrice'] = '$35';
cloneGroceries();

console.log(groceries['other']['paid']);
cloneGroceries();
groceries['other']['paid'] = false;
cloneGroceries()

