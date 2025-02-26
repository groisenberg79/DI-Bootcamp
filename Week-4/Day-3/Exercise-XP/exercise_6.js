// item 2
let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");

// item 3
let newItem = document.createElement('li');
let newText = document.createTextNode('Logout');
newItem.appendChild(newText);
console.log(newItem);
let uElem = document.getElementsByTagName('ul')[0];
uElem.appendChild(newItem);

// item 4
childFirst = uElem.firstElementChild;
childLast = uElem.lastElementChild;
console.log(childFirst.textContent);
console.log(childLast.textContent);