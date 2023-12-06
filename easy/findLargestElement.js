/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
// let numbers = [3, 7, 2, 9, 1]


function findLargestElement(numbers) {
  // if(numbers == null) return undefined
  let maxi = numbers[0]
    if(numbers.length == 0) return undefined
    for (let index = 0; index < numbers.length; index++) {
      if(maxi < numbers[index])
      maxi = numbers[index]
    }
    return maxi;
}

// findLargestElement(numbers)
// console.log(maxi);

// console.log("helo");

module.exports = findLargestElement;