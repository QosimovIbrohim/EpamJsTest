/**
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    if (symbolsCount <= 0) {
      return str;  // If symbolsCount is non-positive, return the original string.
    }
  
    // Optimization for very large symbolsCount:
    let result = "";
    for (let i = 0; i < symbolsCount; i++) {
      result += str;
    }
    return result + str;
  };
  
/**
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    let diffX = Math.abs(z - x);
    let diffY = Math.abs(z - y);
    if (diffX < diffY) {
        return x;
    } else if (diffY < diffX) {
        return y;
    } else {
        return Math.min(x, y);
    }
};

/**
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    return Array.from(new Set(arr));
};
