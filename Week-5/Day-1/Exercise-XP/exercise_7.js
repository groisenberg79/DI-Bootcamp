(function (name){
    const nav = document.querySelector('nav');
    const div = document.createElement('div');
    const friend_name = document.createTextNode(name);
    const img = document.createElement('img');
    img.setAttribute('src', 'Freddy_Krueger_(Robert_Englund).jpg');

    div.appendChild(friend_name);
    div.appendChild(img);
    nav.appendChild(div);
})('Frederich ("Freddy") Krueger');