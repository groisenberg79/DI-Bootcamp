const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1}# is ${color}.`);
})

const violet_exists = colors.some((color) => {
    return (color == "Violet");}
)
if (violet_exists){
    console.log("Yeah");
}
else{
    console.log('No...')
}