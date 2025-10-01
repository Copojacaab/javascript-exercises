const sumAll = function(firstNumber, secondNumber) {
    if(firstNumber < 0 || secondNumber < 0)
        return 'ERROR';

    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){
        return 'ERROR';
    }
    let max = Math.max(firstNumber, secondNumber);
    let min = Math.min(firstNumber, secondNumber);

    let sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
}

console.log(sumAll(1,10));
// Do not edit below this line
module.exports = sumAll;
