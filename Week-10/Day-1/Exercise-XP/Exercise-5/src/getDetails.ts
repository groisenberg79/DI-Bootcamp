const getDetails = (pName: string, age: number): [string, number, string] => {
  return [pName, age, `Hello ${pName}! You are ${age} years old.`];
};

console.log(getDetails("Mary", 45));
