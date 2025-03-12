const three = Promise.resolve(3);
three.then((value) => {
  console.log(value);
});

const boo = Promise.reject("Boo!");
boo.catch((value) => {
  console.log(value);
});
