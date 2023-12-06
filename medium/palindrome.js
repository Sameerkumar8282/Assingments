/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
let str = "Able, was I ere I saw Elba!"
function isPalindrome(str) {
  if (str.length == 0) return true;
  if (str.length == 1) return true;


 

  //we use that to remove white space from the subject
  res = str.toLowerCase().replaceAll(' ','').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')
  rev = res.split('').reverse().join('').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')

  if (rev == res) return true;
  else return false;
}
console.log(isPalindrome(str));

module.exports = isPalindrome;
