// part 1
function greet(){
    alert("Hello, world!");
    }
// setTimeout(greet, 2000);

// part 2
function addParagraph(e){
    const div = document.getElementById('container');
    const paragraph = document.createElement('p')
    const textNode = document.createTextNode('Hello, World!');
    paragraph.appendChild(textNode);
    div.appendChild(paragraph);
}
// setTimeout(addParagraph, 2000);

// Part 3
const timer = setInterval(addParagraph, 2000);
const button = document.getElementById('clear');
button.addEventListener('click', stopParagraph);
function stopParagraph(){
    clearInterval(timer);
}

function stopAfterFive(){
    const div = document.getElementById('container');
    const paragraphs = div.getElementsByTagName('p');
    if (paragraphs.length == 5){
        clearInterval(timer)
    }
}
setInterval(stopAfterFive, 2000);

