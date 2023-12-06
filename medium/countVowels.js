/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
let str = "chatbot"
function countVowels(str) {
  
  if(str.length == 0) return 0
    const vovel = "aeiou"
    let result = str.toLowerCase();
    let count = 0
    
    for (let i = 0; i < str.length; i++) {
      for(let j = 0 ; j < vovel.length;j++){
        if(result[i] == vovel [j]){
          count++;
          break;
        }
      }
      
    }
    console.log(count);
   return count
}
countVowels(str);

module.exports = countVowels;