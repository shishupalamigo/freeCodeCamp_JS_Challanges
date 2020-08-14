//  We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

// Counting Using Recursion 


// for Counting Down

// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      var countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countdown(5));
  // Only change code above this line
  
  
  // for counting Up
  
  
  function countUp(n) {
    if (n < 0) {
      return [];
    } else {
      const myArr = countUp(n - 1);
      myArr.push(n);
      return myArr;
    }
  }
  
  console.log(countUp(10))