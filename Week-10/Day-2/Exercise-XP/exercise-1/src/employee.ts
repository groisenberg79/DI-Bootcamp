class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string
  ) {
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
