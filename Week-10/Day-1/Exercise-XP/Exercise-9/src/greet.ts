function greet(name: string): string;
function greet(): string;
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, stranger!";
  }
}
console.log(greet("Gabriel"));
console.log(greet());
