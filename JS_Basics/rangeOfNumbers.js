// Use of Recursion to Create a Range of Numbers

/*  Challenge-- We have defined a function named 
     rangeOfNumbers with two parameters. The function 
should return an array of integers which begins with a 
number represented by the startNum parameter and ends 
with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the 
ending number. Your function must use recursion by calling 
itself and not use loops of any kind. It should also work 
for cases where both startNum and endNum are the same. */

// solution

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var myNumbers = rangeOfNumbers(startNum, endNum - 1);
    myNumbers.push(endNum);
    return myNumbers;
  }
}
console.log(rangeOfNumbers(10, 20));

// Alternate solution

function rangeOfNumber(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumber(startNum, endNum - 1).concat(endNum);
}
console.log(rangeOfNumber(40, 50));
