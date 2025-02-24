let userInput;

while (true) {
    userInput = prompt("Please enter a number less than 10:");

    // Convert the input to a number
    userInput = Number(userInput);

    // Check if the input is a valid number and less than 10
    if (!isNaN(userInput) && userInput < 10) {
        alert("Thank you! You entered a valid number.");
        break;
    } else {
        alert("Invalid input. Please enter a number less than 10.");
    }
}
