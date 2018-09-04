/*
  Functions(ES5)

  Four parts:
    Function keyword - How the interpreter knows its a function
    Function name - How to use the function later
    Function parameter - List of variable names that can be passed in
    Function execution block - What runs when the function is actually called

*/

function addNums(val1, val2) {
  return val1 + val2;
}

addNums(1, 2);

// Function expression:
let multiplyNums = function(val1, val2) {
  return val1 * val2;
};

multiplyNums(5, 2); // Returns 10

// Default values in parameters:
let findDifference = function(val1 = 10, val2 = 5) {
  return val1 - val2;
}; // If we leave off val2, it will be filled in as 5
// If we use no paramters, we will get 10 and 5

findDifference();

let myObj = {
  firstName: 'Jeff',
  lastName: undefined
};
function printName(person) {
  let firstName, lastName;
  firstName = person.firstName ? person.firstName : '';
  lastName = person.lastName ? person.lastName : '';
  console.log(`${firstName} ${lastName}`);
}
