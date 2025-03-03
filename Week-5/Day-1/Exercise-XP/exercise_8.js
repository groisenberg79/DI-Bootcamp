// part I
// function makeJuice(size){
//     function addIngredients(ing1, ing2, ing3){
//         const p = document.createElement('p');
//         const text = document.createTextNode(`The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`);
//         p.appendChild(text);
//         const body = document.querySelector('body');
//         body.appendChild('p');

        

//     }
//     addIngredients('banana','pineapple', 'pasta');
// }

// makeJuice('2 liters');

//part II
function makeJuice(size){
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3){
        ingredients.push(ing1);
        ingredients.push(ing2);
        ingredients.push(ing3);
    }
    function displayJuice(){
        // creaete the string message
        let text = `The client wants a ${size} juice, containig`;
        for (let i = 0; i < ingredients.length; i++){
            text  += ` ${ingredients[i]},`;
        }
        const correct_text = text.slice(0, text.length - 1) + `.`;
        // create the DOM elements
        const p = document.createElement('p');
        const textNode = document.createTextNode(correct_text);
        p.appendChild(textNode);
        const body = document.querySelector('body');
        body.appendChild(p);
    }
    addIngredients('banana','pineapple', 'pasta');
    addIngredients('blueberry','garlic', 'pita bread');
    displayJuice();
}

makeJuice('2 liters');

