function changeEnough(itemPrice, amountOfChange){
    let totalChange = 0;
    const priceKey = [0.25, 0.10, 0.05, 0.01]
    for (let i = 0; i < priceKey.length; i++){
        totalChange += amountOfChange[i]*priceKey[i]
    }
    if (totalChange >= itemPrice){
        return true
    }
    else return false
}

console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))