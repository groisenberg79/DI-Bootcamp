const logLength  = <T extends {length: number}>(element: T) => {
  console.log(element.length);
}

logLength("hello");
logLength([1,2, 3,4]);
