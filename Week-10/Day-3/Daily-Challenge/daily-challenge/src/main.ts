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

const showUser = (user: User):string => {
  return `username: ${user.name} | age: ${user.age} \n`;
}

const showProduct = (product: Product):string => {
  return `product id: ${product.id} | price: ${product.price} \n`;
}

const showOrder = (order: Order): string => {
  return `order id: ${order.orderId} | amount: ${order.amount} \n`;
}

const handleData = (array: (User | Product | Order)[]): string => {
  let data = "";
  if (array.length === 0) {
    return "no elements stored yet.";
  }
  for (let element of array) {
    if (element.type === "user") {
      data += showUser(user);
    }
    if (element.type === "product") {
      data += showProduct(product);
    }
    if (element.type === "order") {
      data += showOrder(order);
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
