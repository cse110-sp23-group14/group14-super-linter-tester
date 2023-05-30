const t = require('./zodiac')

/**
 * Read the JSON data from the given file path.
 * @param {string} filePath - Path to the JSON file.
 * @returns {object} - Parsed JSON data.
 */
function readHoroscopeData(filePath) {
  const fs = require('fs');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

/**
 * Finds user's sign and current date and returns an appropriate horoscope.
 * @returns {string} A horoscope in string form.
 */
function generateHoroscope() {
  let birthday = localStorage.getItem('birthday');
  let birthdaySplit = birthday.split(".");

  const zodiacData = readZodiacData('zodiac.json');
  const zodiacSigns = zodiacData.ZodiacSigns;
  let sign = getZodiacSign(birthdaySplit[0], birthdaySplit[1], zodiacSigns);
  return "I love astrology!";
}

/**
 * Retrieves information about the daily conditions and returns them as an object.
 * @returns {object} The daily conditions as an object.
 */
function getDailyConditions() {
  // Implementation goes here
}

module.exports = {
  generateHoroscope,
  getDailyConditions,
};