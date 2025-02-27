// item 1
const form = document.getElementsByTagName('form')[0];
console.log(form);

// item 2
// Obs: I'm assuming what the exercise is asking for is
// to retrieve the input HTML elements, and not what
// the user typed on the form.
var fname = document.getElementById('fname'); // I'm using var here because i want to                                                                        
var lname = document.getElementById('lname'); // use the same names for items 2 and 3
let submit = document.getElementById('submit');

console.log(fname);
console.log(lname);
console.log(submit);

// item 3
// Obs: I'm assuming what the exercise is asking for is
// to retrieve the input HTML elements, and not what
// the user typed on the form.
fname = document.getElementsByName('firstname')[0];
lname = document.getElementsByName('lastname')[0];
console.log(fname);
console.log(lname);

// item 4
form.addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault(); // use preventDefault because otherwise the page
                        // will refresh and the changes the event listener 
                        // makes to the DOM will not remain
    let firstName = form.querySelector('input[id = fname]').value;
    let lastName = form.querySelector('input[id = lname]').value;

    if (firstName.length > 0 && lastName.length > 0){
        const usersAnswer = document.querySelector('ul');
        const fnameLi = document.createElement('li');
        const lnameLi = document.createElement('li')
        const textFname = document.createTextNode(firstName);
        const textLname = document.createTextNode(lastName);
        fnameLi.appendChild(textFname);
        lnameLi.appendChild(textLname);
        usersAnswer.appendChild(fnameLi);
        usersAnswer.appendChild(lnameLi);        
    }
}
