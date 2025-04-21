class Calculator {
  public static register: number = 0;

  public static add(a: number, b: number): number {
    return a + b;
  }

  public static subtract(a: number, b: number): number{
    return a - b;
  }
}

console.log(Calculator.add(4, 5));
console.log(Calculator.subtract(9, 11));

