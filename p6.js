// Write a function that returns the sum of all numbers in an array.

function sumOfArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}