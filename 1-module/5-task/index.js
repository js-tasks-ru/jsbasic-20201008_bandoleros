/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  const threeDots = String.fromCodePoint(8230);

  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + threeDots : str;
}
