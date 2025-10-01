// sum of two n
const add = function(n1, n2) {
	return n1 + n2;
};

// subtraction of two n
const subtract = function(n1, nToSub) {
	return n1 - nToSub;
};

// sum of the number in an arr
const sum = function(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum;
};

// multiply all the n in an arr
const multiply = function(arr) {
  if(arr.length === 0){
    return 0;
  }
  let product = 1;
  arr.forEach(num => {
    product = product * num;
  });
  return product;
};

// take base and exponent and returns the power
const power = function(base, exp) {
  let result = 1;
  for(let i = 0; i < exp; i++){
    result *= base;
  }
  return result;
};

// returns the factorial of a number
const factorial = function(n){
  if(n === 0){
    return 1;
  }
  let risultato = 1;
  for(let i = n; i > 1; i--){
    risultato *= i;
  }
  return risultato;
};

console.log(multiply([1,2]));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
