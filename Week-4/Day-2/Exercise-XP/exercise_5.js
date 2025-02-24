
// item 1
const family = {numberOfChildren: 5, numberOfHouses: 3,
    children: ['Maria', 'Marcia', 'Madalena', 'Maristela', 'Melancia'],
    parents: ['Billy', 'Mary']
}

// item 2
for (const key in family) {
    console.log(key)
}

// item 3
for (const key in family) {
    console.log(family[key])
}