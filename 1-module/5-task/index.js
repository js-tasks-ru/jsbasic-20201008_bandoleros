/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  const threeDots = String.fromCodePoint(8230);
  let trimmedStr = str.slice(0, maxlength - 1);

  return (str.length > maxlength) ? `${trimmedStr}${threeDots}` : str;
}
