/**
 * Adds max length to strings
 * @param string
 * @param maxLength
 * @param charReplacer
 * @returns {string}
 */
export default function maxLengthString(string = '', maxLength = 20, charReplacer = '...') {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + charReplacer;
  }
  return string;
}
