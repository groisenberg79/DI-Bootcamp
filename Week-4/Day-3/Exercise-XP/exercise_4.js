function hotelCost (){
    do {
        userInput = prompt("Please type the number of nights you wish to stay in the hotel: ")
        numberOfNights = Number(userInput)
    } while (isNaN(numberOfNights) || numberOfNights == '');

    return numberOfNights*140
}

function planeRideCost(){
    do {
        userInput = prompt("Please type your destination: ")
        checkInput = Number(userInput)
    } while (!isNaN(checkInput) || checkInput == '');
    if (userInput === 'London'){
        return 183
    } else if (userInput === 'Paris'){
        return 220
    } else return 300
}

function rentalCarCost(){
    do {
        userInput = prompt("Please type for how many days you will rent a car: ")
        numberOfDays = Number(userInput)
    } while (isNaN(numberOfDays) || numberOfDays == '');
    if (numberOfDays > 10){
        return numberOfDays*40*0.95
    } else return numberOfDays*40
}

function totalVacationCost(){
    hotel = hotelCost();
    plane = planeRideCost();
    rent = rentalCarCost()
    total = 'The hotel cost: $' + hotel + '. The flight cost: $' + plane
                 + '. The car rental cost: $' + rent + '.' 
    return total

}

console.log(totalVacationCost())

// console.log(hotelCost())

// console.log(planeRideCost())