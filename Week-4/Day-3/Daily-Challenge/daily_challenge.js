planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
colors = ['red', 'lightblue', 'blue', 'FireBrick', 'white', 'lightgreen', 'aquamarine', 'coral']

for (let i = 0; i < planets.length; i++){
    div = document.createElement('div');
    div.setAttribute('class', 'planet');
    text = document.createTextNode(planets[i]);
    div.appendChild(text);
    div.setAttribute('style', 'background-color: ' + colors[i]);
    section = document.getElementsByClassName('listPlanets')[0];
    section.appendChild(div);
}
