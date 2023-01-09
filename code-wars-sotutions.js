// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//Multiples of 3 or 5
function solution(number) {
 if (number <= 0) { // checking to see if the number is less than 0
return 0; // if so returns 0
}
let multiples = 0; // counter used to add multiples of 3 or multiples of 5
for (let i = 0; i < number; i++){ // for loop is used to check if current number is a multiple of 3 or 5
if (i % 3 === 0 || i % 5 === 0) { // to check if current number is a multiple of 3 or 5 
multiples += i; // multiples of 3 or 5 are adding into the counter sum
 } 
}
return multiples; // return sum outside of for loop
} 


// Whos likes it?

function likes(names) {
  if (names.length == 0){ // finds number of elements in the array. If names.length is 0 means no elements return no one likes this
    return "no one likes this"
  } else if (names.length == 1){
    return `${names[0]} likes this` // if there is one element in the array, return the name element like this'
  } else if (names.length == 2){
    return `${names[0]} and ${names[1]} like this` // if there's 2 elements in the array return the first and second element like this'
  } else if (names.length == 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this` // 3 elements in the array return, first + second element and third like this'
  } else if (names.length >= 4){
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this` // there are 4 or more elements return 'first element, second, and the total number of elements not including the first 2 elemts like this'
  }
}

// Find the unique numbers
//[1,1,1,2,1,1]
function findUniq(arr) {
    return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item)
  );
};
/* indexof and lastindexof is checking if the first appearence is the same as the last appearence of the element , if its true it has to shown once*/

//Find The Parity Outlier
function findOutlier(integers){
  let oddNum = []; // need an empty array for it to add odd numbers
  let evenNum = []; // need an empty array for it to add even numbers
  for (const number in integers){ // going to loop through integers array 
    if (integers[number] % 2 == 0){ // this condition is going to check if its even
      evenNum.push(integers[number]) // this is going to push the even numbers to the even number array
    } else {
      oddNum.push(integers[number]) // this is going to push the odd numbers to the odd number array
    }
  } 
  if (evenNum.length == 1){ // if its even to 1 it's going to return that one even number
    return evenNum[0];
  } else {
    return oddNum[0]; // if not its going to return that one odd number
  }
}


// Counting Duplicates

function duplicateCount(text) {
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
/* abcde -> to lower case 
 ["a", "b", "c", "d", "e"] -> split
 ["a", "b", "c", "d", "e"] -> sort
 abcde -> join
 (repeating characters) -> .match
 number of repeating characters -> .length
 */


// Moving Zeros To The End
function moveZeros(arr) {
  for (let i = arr.length - 1; i >= 0 ; i--){ // its going to count backwards from the end of the element array to the start from the array [0]
    if (arr[i] === 0){ // if we find an arr element which is 0
      arr.splice(i, 1) // it gets the number 0 and deletes it
      arr.push(0) // it gets the 0 and pushes it to the end of the array
    }
  }
  return arr // when the function finishes it returns the new array
}

//Simple Pig Latin
function pigIt(str){
  let strArr = str.split(' ') // spliting the array to separate each element in strarr
  let pigLatinPhrase = []  // making an empty array to store the pig latin phrase
  let regex = /([a-zA-Z])/; // using regex to make sure there are letter present
  
  for (let element of strArr){ // used to iterate through the new strarr
    if (regex.test(element)){
      pigLatinPhrase.push(element.substring(1) + element[0] + "ay"); // pushing letters starting from second letter and then adding the first
    } else {
      pigLatinPhrase.push(element) // pushing the rest into array
    }
  } return pigLatinPhrase.join(" "); // returns the output as an string
};

