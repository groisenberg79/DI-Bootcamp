const allBooks = [];
allBooks[0] = {'title': 'Crime and Punishment', 'author': 'Fyodor Dostoevsky',
                'image': 'https://prodimage.images-bn.com/pimages/9780143107637_p0_v3_s1200x1200.jpg',
                'alreadyRead': true
            }
allBooks[1] = {'title': 'The Trial', 'author': 'Franz Kafka', 
                'image': 'https://cdn.penguin.co.uk/dam-assets/books/9780241248300/9780241248300-jacket-large.jpg',
                'alreadyRead': true
}

let div1 = document.createElement('div');
let div2 = document.createElement('div');
let bookSection = document.getElementsByClassName('listBooks')[0];
bookSection.appendChild(div1);
bookSection.appendChild(div2);

listOfDivs = [div1, div2];
for (let i = 0; i < 2; i++){
    text = document.createTextNode(allBooks[i]['title'] + 
                                ' written by ' + allBooks[i]['author'])
    listOfDivs[i].appendChild(text);
    image = document.createElement('img');
    image.setAttribute('src', allBooks[i]['image']);
    image.setAttribute('width', '100px');
    listOfDivs[i].appendChild(image);
    console.log(listOfDivs[i]['alreadyRead'])
    if (allBooks[i]['alreadyRead']){
        listOfDivs[i].style.backgroundColor = 'red';
    }
}

