type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

const describeEmployee = (employee: Employee): string => {
  if (employee.position === "manager") {
    return "manages a team of developers";
  }
  if (employee.position === "developer") {
    return "develops programs in React";
  }
  return "no description available";
};

let employee1: Employee = {
  name: "John",
  age: 34,
  position: "developer",
  department: "game development",
};

let employee2: Employee = {
  name: "Bill",
  age: 43,
  position: "manager",
  department: "sales",
};

let employee3: Employee = {
  name: "Mark",
  age: 68,
  position: "janitor",
  department: "cleaning",
};

console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));
console.log(describeEmployee(employee3));
