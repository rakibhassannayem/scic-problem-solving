// Write a function that capitalizes the first letter of each word in a string.

function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
