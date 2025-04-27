// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const maxWidth = n * 2 - 1;
  for (let i = 0; i < n; i++) {
    const numHashes = i * 2 + 1;
    const numSpaces = (maxWidth - numHashes) / 2;
    console.log(' '.repeat(numSpaces) + '#'.repeat(numHashes) + ' '.repeat(numSpaces));
  }
}

module.exports = pyramid;
