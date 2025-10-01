const fibonacci = function(num) {
    let fibStep = Number(num);
    if(Number.isNaN(fibStep))
        return 'ERROR';
    if(fibStep < 0) 
        return 'OOPS';
    if (fibStep === 0)
        return 0;

    let i;
    var fib = [0,1];

    for(i = 2; i <= fibStep; i++){
        // next fibonacci = previous + one before
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[fib.length-1];
};

console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
