const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

function addCard(id, image, name, email){
    const main = document.querySelector('main');

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', id);

    const picture = document.createElement('img');
    picture.classList.add('picture');
    picture.setAttribute('src', image);

    const robot_name = document.createElement('p');
    robot_name.classList.add('robot-name');
    const name_text = document.createTextNode(name);
    robot_name.appendChild(name_text);

    const robot_email = document.createElement('p');
    robot_email.classList.add('robot-email');
    const email_text = document.createTextNode(email);
    robot_email.appendChild(email_text);

    card.appendChild(picture);
    card.appendChild(robot_name);
    card.appendChild(robot_email);
    main.append(card);

}

function addAllCards(){
    for (let element of robots){
        addCard(element.id, element.image, element.name, element.email);
    }
}

addAllCards();

const search_bar = document.querySelector('.search-bar input');
search_bar.addEventListener('input', searchCards);

const card_set = document.getElementsByClassName('card');

function searchCards() {
    const user_input = search_bar.value.toLowerCase();
    
    for (let card of card_set) {
        const robot_name = card.getElementsByClassName('robot-name')[0].textContent.toLowerCase();
        if (robot_name.includes(user_input)) {
            card.style.display = '';  // Show the card
        } else {
            card.style.display = 'none';  // Hide the card
        }
    }
}