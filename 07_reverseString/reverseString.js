const reverseString = function(str) {
    // trasformo la stringa in array
    let strToArr = str.split('')
    strToArr.reverse();
    let result = strToArr.join('');
    return result;
};

console.log(reverseString('gianni'))
// Do not edit below this line
module.exports = reverseString;
