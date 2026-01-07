// Write a function that checks if a string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
