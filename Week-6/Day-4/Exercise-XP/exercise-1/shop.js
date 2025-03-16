const products = require("./products.js");

const searchProduct = (name) => {
  for (let product of products) {
    if (product.name.toLowerCase() === name.toLowerCase()) {
      return product;
    }
  }
  console.log(`No product with name ${name} found`);
};

console.log(searchProduct("The Republic"));
console.log(searchProduct("Thief"));
console.log(searchProduct("Nike shoes"));
