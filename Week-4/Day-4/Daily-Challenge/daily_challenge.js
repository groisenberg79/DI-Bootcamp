const form = document.getElementById('libform');
form.addEventListener('submit', generateStory);
function generateStory(e){
    e.preventDefault();
    const noun = document.querySelector('input[id = noun]').value;
    const adjective = document.querySelector('input[id = adjective]').value;
    const person = document.querySelector('input[id = person]').value;
    const verb = document.querySelector('input[id = verb]').value;
    const place = document.querySelector('input[id = place]').value;
    const story = document.getElementById('story');
    if (noun.length != 0 && adjective.length != 0 && person.length != 0 &&
        verb.length != 0 && place.length != 0){
        textNode = document.createTextNode("Once upon a time a famous scientist " +
        "by the name of " + person + " discovered a new type of bacteria in " +
        place + " that eventually made him " + verb + " his wife, buy a " +
        adjective + " car and drive into the desert for years, until he found a " +
        noun + " that made him go back to his senses and return to his old self.")
        story.appendChild(textNode);
        }
}