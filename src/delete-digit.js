const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  let maxVal = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nStr.length; i++) {
    const newNStr = nStr.slice(0, i) + nStr.slice(i + 1);
    const newN = parseInt(newNStr);
    maxVal = Math.max(maxVal, newN);
  }

  return maxVal;
}

module.exports = {
  deleteDigit
};
