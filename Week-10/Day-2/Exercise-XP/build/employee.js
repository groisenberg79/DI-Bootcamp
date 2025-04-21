"use strict";
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return `name: ${this.name}, position: ${this.position}`;
    }
}
let employee = new Employee("John", 12000, "drugloard", "sales");
console.log(employee.getEmployeeInfo());
