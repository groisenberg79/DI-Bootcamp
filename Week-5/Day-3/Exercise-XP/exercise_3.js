// item 1
const users = { user1: 18273, user2: 92833, user3: 90315 }
let new_array = Object.entries(users);
console.log(new_array);

// item 2
const new_array2 = new_array.map( user => {
    return [user[0], user[1]*2];
})
console.log(new_array2);