/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


/*

  -----
  LOGIC
  ------

  1. sort the string
  2. compare the string

*/

function sortString(string){
  string =  string.toLowerCase();
  return string.split("").sort().join("");
}


function isAnagram(str1, str2) {
  
  let s1 = sortString(str1);
  let s2 = sortString(str2);
  

  return s1 === s2;
}

module.exports = isAnagram;
