// Variables and types within Javascript

/* Types 
  Examples:
    Number(Integer/Float/Double)
    Strings
    Booleans(true/false)
    Object (Any other defined type, such as arrays, Date, object literals)

*/

/* Declaration types
  let, const and var

  var - Declares a variable with a name, and an optional value

*/

// Declare and instantiate as the number 5
var myNum = 5;

// Declare and instantiate as the string "Hello"
var myString = 'Hello';

// Declare a variable name with no value
var emptyVar;

/* let */

// Declare and instantiate as the number 10
let myNum = 10;

// Declare and instantiate as an object with 1 property
let myObj = {
  prop1: 'Value 1'
};

// Declare a variable name with no value
let emptyVar;

/* const */
// const is a type of variable where the value and the type CANNOT be changed once it is set.
const myNum = 5; // myNum must always be of type Number at this point, and cannot have a different value

const myString = 'Goodbye'; // myString must always be of type String at this point, and cannot have a different value

const myArr = [1, 2, 3, 4, 5, 6]; // myArr must always be of type Array/Object, but the values within CAN be changed.

// myObj must always be an Object, but the properties within it can be changed at any point.
const myObj = {
  prop1: 'value1',
  prop2: 'value2'
};

myObj['prop1'] = 'newValue'; // Valid change
myObj = 5; // invalid change, we cannot change the type

/* When to use each of let, const and var */

// var does not like to stick to the scope that it is declared in. It will persist after the block is finished executing
for (var myVar = 0; myVar < 10; myVar++) {
  console.log(myVar); // Print out 0-9
}
console.log(myVar); // Print out 10, in the var that is still alive

// let
// let will purge/clean itself up after the block that it was contained in has finished executing. This means that the value will be lost, and the name will be freed up as well.
for (let i = 0; i < 10; i++) {
  console.log(i); // Print out 0-9
}
console.log(i); // Print undefined, because i is no longer available.

// Const behaves the same way as let with regards to scoped and cleaning itself up after the execution within the block finishes.

// Variable types and how to declare/use them

// Number:
/*
    Can be declared using just numeric inputs in the code. 
    0-9 plus decimal places
    5
    6
    4.5
*/

// String:
/*
  Three ways to define a string:
    ''
    ""
    ``

  Javascript treats them all equally
    "There's a snake in my boot" // Valid
    'There's a snake in my boot' // Invalid, javascript sees the end of the string after "There"
    `I said, "There's a snake in my boot!"` // Valid

  Other benefit of using the backtick:
    ES6 String Interpolation
    A method to 'interpolate' variable values within your strings easily
    let myNum = 5;
    'The value of myNum is: ' + myNum;
    "The value of myNum is: " + myNum;
    `The value of myNum is: ${myNum}`;

*/

// Declaring objects and arrays
// Arrays:
let myEmptyArr = [];
let myArr = [1, 2, 3, 4, 5];
let myLongDeclarationArr = new Array();

// Modifying values within an array:
myArr[0] = 'Value';
myArr[myArr.length - 1] = 'Changed last value';

// Objects:
let myEmptyObj = {};
let myObj = {
  prop1: 'val1',
  prop2: 'val2'
};
let myLongObjectDeclaration = new Object();

// Modifying properties on an Object:
myObj.propName = 'Value';
myObj['propName2'] = 'Value2';
