// Part 1
// Item 1
const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);

// Item 2
people[2] = 'Jason';

// Item 3
people.push("Gabriel");

// Item 4
console.log(people.indexOf('Mary'));

// Item 5
console.log(people.slice(1,3));

// Item 6
console.log(people.indexOf('Foo'));

// Item 7
let last = people[people.length - 1];
console.log(last);

// Part 2
// Item 1
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
}

// Item 2
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
    if (people[index] == 'Devon'){
        break;
    }
}
