/**
 * Read the JSON data from the given file path.
 * @param {string} filePath - Path to the JSON file.
 * @returns {object} - Parsed JSON data.
 */
function readZodiacData(filePath) {
  const fs = require('fs');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
  
/**
 * Get the zodiac sign based on the given month and day.
 * @param {number} month - Month (1-12).
 * @param {number} day - Day (1-31).
 * @param {object[]} zodiacSigns - Array of zodiac sign objects.
 * @returns {string|null} - Zodiac sign name or null if not found.
 */
function getZodiacSign(month, day, zodiacSigns) {
  for (const sign of zodiacSigns) {
    if (
      (month === sign.startMonth && day >= sign.startDay) ||
      (month === sign.endMonth && day <= sign.endDay)
    ) {
      return sign.name;
    }
  }
  return null;
}

/**
 * Get the compatibility between two zodiac signs.
 * @param {string} zodiacSign1 - First zodiac sign.
 * @param {string} zodiacSign2 - Second zodiac sign.
 * @param {object} compatibilityData - Object representing zodiac sign compatibility.
 * @returns {string} - Compatibility status ("OK" or "UNKNOWN").
 */
function getCompatibility(zodiacSign1, zodiacSign2, compatibilityData) {
  if (
    zodiacSign1 in compatibilityData &&
    zodiacSign2 in compatibilityData[zodiacSign1]
  ) {
    return compatibilityData[zodiacSign1][zodiacSign2];
  }
  return "UNKNOWN";
}

// Example usage
const zodiacData = readZodiacData('zodiac.json');
const zodiacSigns = zodiacData.ZodiacSigns;
const compatibilityData = zodiacData.Compatibility;

const zodiacSign1 = getZodiacSign(7, 23, zodiacSigns); // Leo
const zodiacSign2 = getZodiacSign(9, 23, zodiacSigns); // Virgo
const compatibility = getCompatibility(zodiacSign1, zodiacSign2, compatibilityData);
console.log(compatibility); // Output: "OK"

// Export functions for horoscope.js
module.exports = {
  readZodiacData,
  getZodiacSign,
};
