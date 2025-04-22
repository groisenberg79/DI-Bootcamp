type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

const handleData = (array: (User | Product | Order)[]): string => {
  let data = "";
  if (array.length === 0) {
    return "no elements stored yet.";
  }
  for (let element of array) {
    if (element.type === "user") {
      data += `username: ${element.name} | age: ${element.age} \n`;
    }
    if (element.type === "product") {
      data += `product id: ${element.id} | price: ${element.price} \n`;
    }
    if (element.type === "order") {
      data += `order id: ${element.orderId} | amount: ${element.amount} \n`;
    }
  }
  return data;
};

let user: User = {
  type: "user",
  name: "John",
  age: 25,
};

let product: Product = {
  type: "product",
  id: 123,
  price: 12000,
};

let order: Order = {
  type: "order",
  orderId: "asdv345",
  amount: 300,
};

console.log(handleData([user, product, order]));
