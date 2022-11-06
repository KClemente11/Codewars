// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(array) {
    let reduction = array.reduce((pre, cur) => pre + cur, 0)
    
    if(reduction % 2 === 0 || reduction === 0 || array === []){
      return "even"
    }else{
      return "odd"
    }
 }