const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let secretName = '';
for (let index = 0; index < names.length; index++) {
    secretName += names[index][0];
}
console.log(secretName)