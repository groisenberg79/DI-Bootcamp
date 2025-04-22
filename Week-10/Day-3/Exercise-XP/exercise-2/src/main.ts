const describeValue = (item: number | string): string => {
  if (typeof item === "number") {
    return "this is a number";
  } else return "this is a string";
};

let a: number = 23;
let b: string = "hello";

console.log(describeValue(a));
console.log(describeValue(b));
