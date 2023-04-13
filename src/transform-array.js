/*const { NotImplementedError } = require('../extensions/index.js');*/

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} clonedArray initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`\'arr\' parameter must be an instance of the Array!`);
  let clonedArray = arr.slice(0);
  for (let i = 0; i < clonedArray.length; i++) {
    if (clonedArray[i] === '--double-next') {
      if (i+1 === clonedArray.length) {
        clonedArray.pop()
        return clonedArray;
      }
      if (i+2 === '--discard-prev') {
        clonedArray.splice(i, 1) 
        clonedArray.splice(i+2, 1) 
        continue
      }
      if (i+2 === '--double-prev') {
        clonedArray[i+2] = clonedArray[i+1]
      }
      clonedArray[i] = clonedArray[i+1]
    }
    if (clonedArray[i] === '--discard-next') {
      if (i+1 === clonedArray.length) {
        clonedArray.pop()
        return clonedArray;
      }
      if (i+2 === '--discard-prev' || '--double-prev') {
        clonedArray.splice(i, 3)
      i--; 
      continue;
      }
      clonedArray.splice(i, 2)
      i--;
    }
    if (clonedArray[i] === '--discard-prev') {
      if (i === 0) {
        clonedArray.shift()
        continue;
      }
      clonedArray.splice(i-1, 2)
      i = i - 2;
    }
    if (clonedArray[i] === '--double-prev') {
      if (i === 0) {
        clonedArray.shift()
        continue;
      }
      clonedArray[i] = clonedArray[i-1]
    }
  }
  return clonedArray;
}

transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));


module.exports = {
  transform
};
