// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}