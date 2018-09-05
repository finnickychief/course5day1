/* 
  Exercise 1:
    Finish the function isNumeric
      It checks the type of a parameter to determine if
      it is a numeric value.

      Hint: The typeof command will be very useful with this function
    
*/
function isNumeric(x) {
  if (typeof x === 'number') {
    return true;
  } else {
    return false;
  }
}

/* 
  Exercise 2:
    Finish the function isAlpha
      It checks the type and value of a parameter to determine
      if it is a single character within the english alphabet('a' through 'z')

      Hint: Use the String.includes function
*/
function isAlpha(x) {
  // if (x.length != 1 && typeof x !== 'string') return false;

  // const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // return alphabet.includes(x.toLowerCase());

  if (x.length == '1') {
    if (x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/*
  Exercise 3:
    Finish the function inRange. 
      It checks the values of the parameters to determine 
      if the first parameter is a numeric value between the 
      second two parameters
*/
function inRange(x, lowRange, highRange) {
  if (x >= lowRange && x <= highRange) {
    return true;
  } else {
    return false;
  }
}

/*
  Exercise 4:
    Finish the function hasKey.
      It checks the first parameter and determines if it has a key
      that is equal to the value in the second parameter.
*/
function hasKey(obj, key) {
  if (obj[key] !== undefined) {
    return true;
  } else {
    return false;
  }
}

/*
  Exercise 5:
    Finish the function isSorted.
      It takes in an array and determines if it is sorted in the order
      provided by the second parameter. ASC for Ascending, DESC for Descending
      
      [1, 2, 3, 4, 5, 6, 7, 8] - Sorted? Yes
      [2, 3, 5, 1, 7, 3, 7, 9] - Sorted? No
      
      "12345678"
      "23517379" == "12335779"
                              
      
*/
function isSorted(arr, flag) {
  if (flag == 'ASC') {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  } else if (flag == 'DESC') {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

/* 
  Exercise 6:

   numOccurences
  Write a function that counts the number of times an item appears in an array.
    The two parameters are the array to search, and the item you're looking for.

*/
function numOccurences(inputArr, item) {
  let count = 0; // Variable to track the number of occurences
  // Loop through the array
  for (let i = 0; i < inputArr.length; i++) {
    // If the CURRENT item is equal to the item we are checking for
    if (inputArr[i] === item) {
      count++; // Increment our counter
    }
  }

  return count;
}

/* 
  Exercise 7:

   findMax
  Write a function that finds and returns the highest value within an array.
    The parameter is the array to search
    
    */
function findMax(inputArr) {
  // 2 ways:
  // Keep track of the index that the current largest item occurs at
  // Keep track of the highest item in another variable

  //let highestValue = inputArr[0]; // No magic numbers, use only values that we know are in the array already.
  let highestIndex = 0;

  // Loop through the array, start at 1 because we already have the first item
  for (let i = 1; i < inputArr.length; i++) {
    // Check to see which value is larger
    // if (highestValue < inputArr[i]) {
    //   highestValue = inputArr[i]; // reset highestValue if a higher number is found
    // }
    if (inputArr[highestIndex] < inputArr[i]) {
      highestIndex = i;
    }
  }

  // return highestValue;
  return inputArr[highestIndex];

  // Short solution:
  // return Math.max(...inputArr);
}

/* 
  Exercise 8:

   findMin
  Write a function that finds and returns the lowest value within an array.
    The parameter is the array to search
*/
function findMin(inputArr) {
  let lowestValue = inputArr[0];

  for (let i = 0; i < inputArr.length; i++) {
    if (lowestValue > inputArr[i]) {
      lowestValue = inputArr[i];
    }
  }
  return lowestValue;
}
