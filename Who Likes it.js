// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    let nameOne = names[0]
    let nameTwo = names[1]
    let nameThree = names[2]
    let variableIdx = names.length - 2
    if(names.length == 0){
      return "no one likes this"
    }else if(names.length === 1){
      return `${nameOne} likes this`
    }else if(names.length === 2){
      return `${nameOne} and ${nameTwo} like this`
    }else if(names.length === 3){
      return `${nameOne}, ${nameTwo} and ${nameThree} like this`
    }else if(names.length > 3){
      return `${nameOne}, ${nameTwo} and ${variableIdx} others like this`
    }
  }