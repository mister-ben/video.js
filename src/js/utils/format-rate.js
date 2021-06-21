/**
 * @file format-rate.js
 * @module format-rate
 */

/**
 * Format a number as a localised string with the decimal separaor appropriate for the locale
 *
 * @private
 * @param  {number} rate
 *         Number to format
 *
 * @param  {string} locale
 *         The locale to localise into
 *
 * @return {string}
 *         Time formatted as e.g. 1.5 / 1,5
 */
const localizeRate = function(rate, locale) {
  try {
    rate = rate.toLocaleString(locale);
  } catch (e) {
    // Browser will throw RangeError for an unsupported locale
  }
  return rate;
};

export default localizeRate;
