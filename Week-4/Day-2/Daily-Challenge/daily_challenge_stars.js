//Fist Solution:

let star = '*';
for (let index = 0; index < 6; index++) {
    console.log(star)
    star += ' *'
}

// Second Solution:

let star2 = '*';
for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++){
        console.log(star2);
        star2 += ' *';
    }
}