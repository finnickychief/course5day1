/*
  ES5 Array functions

  Before each section, assume the array is this:
  const myAry = [1,2,3,4,5,6];

  // From the end of the array:
  push // Adds
  pop // Removes

  myAry.push(7); // myAry is now [1,2,3,4,5,6,7]
  myAry.pop(); // Return and remove 7
  myAry.pop(); // Return and remove 6, myAry is now [1,2,3,4,5];


  // From the beginning of the array:
  unshift // Adds
  shift // Removes

  myAry.unshift(7) // Add 7 to beginning, myAry is now [7,1,2,3,4,5,6]
  myAry.shift() // Return and remove 7
  myAry.shift() // Return and remove 1

  // Return(and possibly remove) a range of values
  
  splice
  // Splice will return AND remove items from an array
  // It starts at the first index provided, and removes N values from the array
  array.splice(index, N); // Remove N items starting at index
  const numAry = [1,2,3,4,5,6];
  numAry.splice(1, 3);


  slice
  // Slice will return items from an array
  // Start at the first index provided, and goes up until but NOT including the second value
  numAry.slice(0, 2) // Will return the items at 0 and 1, but NOT 2
  numAry.slice(1, 4) // Will return the items at 1, 2 and 3, but NOT 4


  join
  // Used to create a string based on an array
  Takes in a delineator and puts it between each item in an array, and returns a string based on that result
  let mySentence = ["Hello", "from", "an", "array"];
  mySentence.join(' ');

  reverse
  // Modifies and returns an array so that is 'flipped', so the last item will become the first, the second to last item will become the second, etc
  mySentence.reverse() // Will make mySentence be ["array", "an", "from", "Hello"];


  includes
  // This method will return true or false based on whether it can find the item within the array

  findIndex/indexOf
  // Searches for the item provided, and returns the first index that it occurs at
  let myAry = [1,2,3,4,5,6];
  myAry.findIndex(3); // Returns 2
  myAry.indexOf(3); // Returns 2
  myAry.findIndex('Hello') // Returns -1

  findLastIndex
  // Searches for the item provided, and returns the last index that it occurs at
  let myAry2 = [1,1,2,2,3,3,1,1];
  myAry2.findLastIndex(2); // Return 3
  myAry2.findLastIndex(1); // Return 7


Git test stuff




*/
