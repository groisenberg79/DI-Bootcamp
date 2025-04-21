class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  getProductInfo(){
    return `name: ${this.name}, price: ${this.price}`
  }
}

let product = new Product(123, "iPad", 12000);
console.log(product);

// product.id = 456; --> Cannot assign to 'id' because it is a read-only property.ts(2540)

