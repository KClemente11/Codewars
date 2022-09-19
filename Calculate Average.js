// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if(array.length > 0){
      let total = array.reduce((acc,c) => acc + c,0)
     return total / array.length
    }else{
      return 0
    }
  }