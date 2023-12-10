/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let s = str.toLowerCase();
  let vowelCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let i  = 0; i < s.length; i++){
    let ch = s.charAt(i);
    if(vowels.includes(ch)){ vowelCount++; }
  }
  return vowelCount;
}

module.exports = countVowels;