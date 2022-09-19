// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let total = array.reduce((acc,c) => acc + c,0)
    
    return total / array.length
  }