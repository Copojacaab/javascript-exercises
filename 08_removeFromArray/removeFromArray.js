const removeFromArray = function(arr, ...rmElements) {
    const ERROR = 'Puoi rimuovere solo interi';
    const NOT_FOUND = 'Elemento non presente nell\'array';
    for(let i = 0; i < rmElements.length; i++){
        let numberToRm = rmElements[i];
        // per scorrere l'arr da modificare
        for(let j = arr.length-1; j >= 0; j--){
            if(arr[j] === numberToRm){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos")); 
// Do not edit below this line
module.exports = removeFromArray;
