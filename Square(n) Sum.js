// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function findAverage(array) {
  if(array.length > 0){
    let total = array.reduce((acc,c) => acc + c,0)
   return total / array.length
  }else{
    return 0
  }
}