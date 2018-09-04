/*
  Conditional logic:
    Ways to conditionally execute code based on the result of a comparison

  Truthy: Values that will evaluate as True
  Falsy: Values that will evaluate as False
  Truthy Values:
    Any string that is not empty
    Any number that is not 0
    True
    Objects

  Falsy:
    0
    Empty strings('', "", ``)
    False
    undefined
    null
    NaN

  How to make an object falsy when empty:
    Object.keys(myObj).length <-- Returns a number based on the number of properties/keys on an object. If it is 0, there are no properties so it is empty

  Comparison operators:
    ==  - Equal value
    === - Equal value AND type
    >   - Greater
    <   - Less
    >=  - Greater/Equal
    <=  - Less/Equal
    !=  - Not equal value
    !== - Not equal value AND not equal type

    3 == "3" // true because the values are the same
    3 === "3" // false, not equal type
    3 > 3 // false, 3 is not greater than 3
    3 >= 3 // True, 3 is equal to 3
    3 !== 4 // True, 3 is not equal to 4 and they are of the same type


  if/else statements
    Makes use of the truthy/falsy values as well as comparison operators to conditionally execute code

    if(3 == 3){
      // Execute code within because 3 == 3 evaluates as true
    }

    if(3 === "3"){
      // Do not execute code in here because 3 === "3" evaluates as false
    }else {
      // Execute this block instead
    }

    if(3 > 2) console.log('This was true'); // if/else statements will execute the first piece of code they find after they are written, whether it is a single statement or a block full of statements




  Compound comparisons
    You can chain together different comparisons to perform more complicated checks in a more succinct manner

    Do something if 3 is greater than and it is less than 10
    if(3 > 2){
      if(3 < 10){
        // do something
      }
    }

    && / || <-- 2 ways to chain together our conditional checks into 1 statement

    && - AND operator
    // If both of conditions are true, evaluate as true
    if(3 > 2 && 3 < 10){
      // do something
    }

    || - OR operator
    // If EITHER of the conditions are true, evaluate as true
    if(3 < 2 || 3 < 10){
      // this code will execute because at least 1 is true
    }

  ternary statement
    A way to shorten your code if you only need one thing to execute on the result of a conditional check

    Structure of a ternary:
      Condition + ternary operator(question mark)
      True execution
      False execution

    if(3 > 2){
      console.log("This was true");
    }else {
      console.log("This was false");
    }

    3 > 2 ? console.log("This was true") 
    :       console.log("This was false");

    
    console.log("This was " + 3 > 2 ? 'true' : '')

*/
