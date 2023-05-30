const t = require('./zodiac')
/*
 *Read the JSON data from the given file path.
 *@param {string} filePath - Path to the JSON file.
 *@returns {object} - Parsed JSON data.
 
function readHoroscopeData(filePath) {
  const fs = require('fs');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}*/

/**
 * Finds user's sign and current date and returns an appropriate horoscope.
 * @returns {string} A horoscope in string form.
 */
function generateHoroscope() {
  // Getting Birthday Data
  let birthday = localStorage.getItem('birthday');
  let birthdaySplit = birthday.split(".");

  // Getting Zodiac sign data
  const zodiacData = readJsonData('zodiac.json');
  const zodiacSigns = zodiacData.ZodiacSigns;
  let sign = getZodiacSign(birthdaySplit[0], birthdaySplit[1], zodiacSigns);
  
  

  // Getting Date for hashing function
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  let stringInputToHash = "" + day + month;
  let inputToHash = Number(stringInputToHash);
  const hashValue = inputToHash % 13;

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