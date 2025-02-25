function displayNumbersDivisible() {
    let sum = 0;
    let num_str = '';
    for (let i = 0; i <= 500; i++){
        if (i % 23 == 0){
            num_str += i + ' '
            sum += i
        }
    }
    console.log('numbers divisible by 23:', num_str)
    console.log('sum: ', sum)
}

displayNumbersDivisible()