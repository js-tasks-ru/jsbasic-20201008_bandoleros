/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  lowerCaseStr = str.toLowerCase();

  return lowerCaseStr.includes('1xbet') || lowerCaseStr.includes('xxx');
}
