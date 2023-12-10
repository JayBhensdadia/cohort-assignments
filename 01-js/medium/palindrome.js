/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function prepareString(str){
  
  //lower case the string
  let s = str.toLowerCase();

  //remove white spaces
  s = s.split(" ").join("");

  //remove punctuations
  s = s.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"")
  return s;
}

function isPalindrome(str) {
  let s = prepareString(str);
  //console.log(s);
  let i = 0;
  let j = s.length - 1;

  while(i <= j){
    if(s.charAt(i)===s.charAt(j)){
      i++;
      j--;
    }else{
      return false;
    }
  }
  return true;
}

//isPalindrome("Eva, can I see bees in a cave?");
module.exports = isPalindrome;
