// Basic Algorithm Scripting: Find the Longest Word in a String

// Question;
// function findLongestWordLength(str) {
//   return str.length;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
  let r = str.split(' ');
  let s = 0;

  for (let i = 0; i < r.length; i++) {
    if (r[i].length > s) {
      s = r[i].length;
    }
  }

  return s;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
//  Output ;
// 6

// Intermediate Code Solution: ---------------------------------------------
// Using .reduce()

// function findLongestWordLength(s) {
//   return s.split(' ')
//     .reduce(function(x, y) {
//       return Math.max(x, y.length)
//     }, 0);
// }

// console.log(
//   findLongestWordLength('The quick brown fox jumped over the lazy dog')
// );
//  Output ;
// 6
// -------------------------------------------------------------------------

// Using recursiveness

// function findLongestWordLength(str) {

//   //split the string into individual words
//   //(important!!, you'll see why later)
//   str = str.split(" ");

//   //str only has 1 element left that is the longest element,
//   //return the length of that element
//   if(str.length == 1){
//     return str[0].length;
//   }

//   //if the first element's length is greater than the second element's (or equal)
//   //remove the second element and recursively call the function)
//   if(str[0].length >= str[1].length){
//     str.splice(1,1);
//     return findLongestWordLength(str.join(" "));
//   }

//   //if the second element's length is greater thant the first element's start
//   //call the function past the first element
//   if(str[0].length <= str[1].length){
//     // from the first element to the last element inclusive.
//     return findLongestWordLength(str.slice(1,str.length).join(" "));
//   }
// }
