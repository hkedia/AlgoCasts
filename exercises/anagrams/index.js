// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  return charMap;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const charCount = {};

//   for (let char of stringA.replace(/[^\w]/g, '').toLowerCase()) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let char of stringB.replace(/[^\w]/g, '').toLowerCase()) {
//     if (!charCount[char]) {
//       return false;
//     }
//     charCount[char] -= 1;
//   }

//   return Object.values(charCount).every(count => count === 0);
// }