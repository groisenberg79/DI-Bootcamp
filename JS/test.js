LongString = `This is a long string.
This is actually a test to see how the 'ticks' thing works.
It looks promissing!`

console.log(LongString)

let ltext = LongString.length

console.log(ltext)

let addressNumber = '2';
let addressStreet = 'Eliahu HaNavi';
let country = 'Israel';

let globalAddress;
globalAddress = 'I live in ' +  addressStreet + ' ' + addressNumber
                 + ', in ' + country;

console.log(globalAddress);

let op = 10;
op = op.toString(); 
console.log(typeof op);

let birth = `26/06/1979`;
let future = '2030';
let age = '51';

let pred = 'i will be ' + age + ' years old by ' + future;
console.log(pred)

let colors = ["blue", "yellow", "green" ]; 
console.log(colors.pop()); 
console.log(colors) //["blue", "yellow"];

let pets = ['cat','dog','fish','rabbit','cow'];
console.log(pets[1]);
console.log(pets.length)
