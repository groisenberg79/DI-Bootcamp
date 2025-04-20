// Step 1: Get the element from the DOM
const inputElement = document.getElementById("myInput");

// Step 2: Type assertion to HTMLInputElement
const typedInput = inputElement as HTMLInputElement;

// Step 3: Access and modify a property
typedInput.value = "Hello from TypeScript!";

// Extra: Add a button listener to set a new value
const button = document.getElementById("setValueBtn") as HTMLButtonElement;
button.addEventListener("click", () => {
  typedInput.value = "Button clicked!";
});
