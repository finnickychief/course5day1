/*
  Loops:

  for
    Typically used with a counter
    Most often used to generate a list of values based on a counter, OR
    Iterate over an array


  General structure of a for loop:
    Counter
    Boundary for when you want the loop to end
    Increment to change the value of the counter

  // Lifecycle of loop runs
  // First initiate the counter
  // Then whenever you reach the top of the loop, run the conditional statement
     IF the conditional statement is true, run the code block
  // Whenever you reach the bottom of the loop, run the increment statement
     After the increment is run, loop back up to the top

  for(let i = 0; i < 10; i++){
    console.log(i) // Prints out 0-9
  }


  while

  let i = 0;
  while( i < 10){
    console.log(i);
    i++;
  }


  Practical uses of for loops:
    const numAry = [1,2,3,4,5,6];

    for(let i = 0; i < numAry.length; i++){
      console.log(numAry[i]);
    }

    // Filter
    const fruits = ['Apple', 'Plum', 'Orange', 'Raspberry'];
    const shortFruits = [];
    for(let i = 0; i < fruits.length; i++){
      if(fruits[i].length <= 5){
        shortFruits.push(fruits[i]);
      }
    }
    console.log(shortFruits);

    // forEach
    const numAry = [1,2,3,4,5,6];
    for(let i = 0; i < numAry.length; i++){
      console.log(numAry[i]);
    }

    // reducing down to 1 value
    let sum = 0;
    for(let i = 0; i < numAry.length; i++){
      sum += numAry[i];
    }

    // find sum of even numbers
    sum = 0;
    for(let i = 0; i < numAry.length; i++){
      if(numAry[i] % 2 === 0){
        sum += numAry[i];
      }
    }
  
*/
