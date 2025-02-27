// item 1
const form = document.getElementsByTagName('form')[0];
console.log(form);

// item 2
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

console.log(fname);
console.log(lname);
console.log(submit);

// item 3
let firstname = document.getElementsByName('firstname')[0];
let lastname = document.getElementsByName('lastname')[0];
console.log(firstname);
console.log(lastname);

// item 4
form.addEventListener('submit', addFormName);
function addFormName(e){
    e.preventDefault();
    let newName = form.querySelector('input[type="text"]').value;

    if (newName.length > 0){
        usersAnswer = document.getElementsByClassName('usersAnswer')[0];
        newLi = document.createElement('li');
        newTextNode = document.createTextNode(newName);
        usersAnswer.appendChild(newLi);
        newLi.appendChild(newTextNode);        
    }
}
