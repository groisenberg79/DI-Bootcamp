// item 1
let h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag[0]);

// item 2
let article = document.getElementsByTagName('article')[0]
let paragraphs = article.getElementsByTagName('p');
let lastPar = paragraphs[paragraphs.length - 1];
console.log(lastPar);
article.removeChild(lastPar);

// item 3
let h2 = document.getElementsByTagName('h2')[0];
h2.setAttribute('onclick', 'changeColor()');
function changeColor(){
    h2.setAttribute('style', 'background-color: red');
}

// item 4
let h3 = document.getElementsByTagName('h3')[0];
h3.setAttribute('onclick', 'hideHeader()');
function hideHeader(){
    h3.setAttribute('style', 'display: none')
}

// item 5
let button = document.createElement('button');
let text = document.createTextNode('get bold')
button.setAttribute('type', 'button');
button.setAttribute('onclick', 'getBold()')
function getBold(){
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].setAttribute('style', 'font-weight: bold');
    }
}
button.appendChild(text);
article.appendChild(button);

