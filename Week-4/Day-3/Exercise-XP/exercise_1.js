function displayNumbersDivisible(divisor) {
    let sum = 0;
    let num_str = '';
    for (let i = 0; i <= 500; i++){
        if (i % divisor == 0){
            num_str += i + ' '
            sum += i
        }
    }
    console.log('numbers divisible by '+  divisor + ':', num_str)
    console.log('sum: ', sum)
}

displayNumbersDivisible(23)