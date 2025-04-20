let person: {
  name: string;
  age: number;
};

const createPerson = (pName: string, age: number) => {
  return (person = {
    name: pName,
    age: age,
  });
};

console.log(createPerson("John", 45));
