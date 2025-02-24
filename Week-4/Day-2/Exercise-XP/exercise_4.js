const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// item 2
console.log(building['numberOfFloors'])

// item 3
console.log(building['numberOfAptByFloor']['firstFloor'], 
            building['numberOfAptByFloor']['thirdFloor'])

// item 4
console.log(building['nameOfTenants'][1], building['numberOfRoomsAndRent']['dan'][0])

// item 5
let sarasRent = building['numberOfRoomsAndRent']['sarah'][1];
let davidsRent = building['numberOfRoomsAndRent']['david'][1];
let dansRent = building['numberOfRoomsAndRent']['dan'][1];

if (sarasRent + davidsRent > dansRent) {
    building['numberOfRoomsAndRent']['dan'][1] = 1200;
}

console.log(building['numberOfRoomsAndRent']['dan'][1])
