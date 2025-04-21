class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    return `The sound this animal makes`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): string {
    return "woof woof!";
  }
}

let dog = new Dog("Fido");

console.log(dog.makeSound());
