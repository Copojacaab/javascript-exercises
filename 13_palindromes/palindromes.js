const { lowerCase } = require("case-anything");

const palindromes = function (string) {
    // per togliere punteggiatura e spazi
    string = string.replace(/[\s\p{P}]/gu, "");
    string = lowerCase(string);
    // strigna pronta per l'analisi 
    let arrStr = string.split('');
    console.log(arrStr);
    const length = arrStr.length;
    for(let i = 0; i < length - 1; i++){
        if(arrStr[i] !== arrStr[length - i - 1]){
            return false;
        }
    }
    return true;
};
console.log(palindromes('cac'));
// Do not edit below this line
module.exports = palindromes;
