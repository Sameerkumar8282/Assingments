/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1,str2) {
  let q1 = str1.toLowerCase();
  let q2 = str2.toLowerCase();
  console.log(str1)
  let s1 = q1.split('').sort().join('');
  let s2 = q2.split('').sort().join('');
   
   console.log(s1,s2);
  return s1 == s2;

}
let a = isAnagram('Debit Card', 'Bad Credit')
console.log(a);
module.exports = isAnagram;
