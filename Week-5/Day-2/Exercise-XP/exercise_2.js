const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => 
                index == 0 ? console.log(`1${ordinal[1]} choice is ${color}.`) : 
                index == 1 ? console.log(`2${ordinal[2]} is ${color}.`) :
                index == 2 ? console.log(`3${ordinal[3]} is ${color}.`) :
                console.log(`${index + 1}${ordinal[0]} is ${color}.`)
)