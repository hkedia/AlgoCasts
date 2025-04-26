// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // Convert the number to a string, reverse it, and convert it back to a number
  const reversed = parseInt(n.toString().split('').reverse().join(''));

  // If the original number is negative, return the negative of the reversed number
  return n < 0 ? -reversed : reversed;
}

module.exports = reverseInt;
