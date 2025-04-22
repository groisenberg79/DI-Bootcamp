type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

let someGuy: PersonWithAddress ={
  name: "John",
  age: 76,
  street: "Middle of Nowhere 12",
  city: "Crappy Town"
}

console.log(someGuy);
