import { people } from "./data.js";

const average = (people_array) => {
  let sum = 0;
  for (let person of people_array) {
    sum += person.age;
  }
  return sum / people_array.length;
};

console.log(average(people));
