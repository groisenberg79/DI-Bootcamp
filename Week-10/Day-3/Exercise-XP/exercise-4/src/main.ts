const getFirstElement = (array: (number | string)[]): string => {
  const element1 = array[0];
  return element1 as string;
};

// Test cases
const result1 = getFirstElement(["hello", 42, "world"]);
console.log(result1); // "hello"

const result2 = getFirstElement([100, "foo", "bar"]);
console.log(result2); // 100

console.log(typeof result2); // still a number at runtime, but TS treats it as a string in getFirstElement
