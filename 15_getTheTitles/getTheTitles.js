const getTheTitles = function(arrToConvert) {
    let arrConverted = [];
    arrToConvert.forEach(element => {
        arrConverted.push(element.title);
    });
    return arrConverted;
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
