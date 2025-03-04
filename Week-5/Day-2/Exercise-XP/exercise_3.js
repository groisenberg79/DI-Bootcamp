
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// This is the spread operator, which unpacks an iterable into
// another array. The result should be:
// [braead, 'carrot', 'potato', 'chicken', 'apple', 'orange']
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// this is again a spread operator. Since every string is an
// iterable, it will unpack each character of the string as an
// element of the new array: ['U', 'S', 'A']
const country = "USA";
console.log([...country]);