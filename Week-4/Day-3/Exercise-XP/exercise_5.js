// item 2
let div = document.getElementById('container');
console.log(div);

let elements = document.getElementsByTagName('li');
elements[1].textContent = 'Richard';

let ulists = document.getElementsByTagName('ul')
ulists[1].removeChild(ulists[1].children[1])

for (let i = 0; i < 2; i++){
    let items = ulists[i].getElementsByTagName('li');
    items[0].textContent = 'Gabriel';
}

// item 3
for (let i = 0; i < 2; i++){
    ulists[i].classList.add('student_list');
}

ulists[0].classList.add('university', 'attendence');

// item 4
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';
last = ulists[1].getElementsByTagName('li')[1];
last.textContent = "";
document.body.style.fontSize = '20px'