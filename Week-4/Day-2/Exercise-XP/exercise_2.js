const colors = ['red', 'green', 'blue', 'yellow']
const suffixes = ['1st', '2nd', '3rd', '4th']

for (let i = 0; i < colors.length; i++) {
    console.log('My #', i + 1, 'choice is', colors[i])    
}

for (let i = 0; i < colors.length; i++){
    console.log('My', suffixes[i], 'choice is', colors[i])
}