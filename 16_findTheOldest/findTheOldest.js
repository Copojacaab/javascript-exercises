const findTheOldest = function(arr) {
    let currOldest;
    let currMaxAge = 0;
    arr.forEach(element => {
        let age = element.yearOfDeath - element.yearOfBirth;
        if (age > currMaxAge){
            currMaxAge = age;
            currOldest = element.name;
        }
    });
    return currOldest.name;
};

    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        // yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
