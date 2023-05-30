function readJsonData(filePath) {
  const files = require('fs');
  const jsonData = files.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

const {
  getZodiacSign,
  getCompatibility
} = require('./zodiac.js');

// Mock the fs.readFileSync function
jest.mock('fs');
fs.readFileSync.mockReturnValue('{"ZodiacSigns": [], "Compatibility": {}}');

describe('getZodiacSign', () => {
  const zodiacData = readJsonData('./zodiac.json');
  const zodiacSigns = zodiacData.ZodiacSigns;
  
    it('should return the correct zodiac sign for a given month and day within the range', () => {
      const zodiacSign = getZodiacSign(4, 3, zodiacSigns);
      expect(zodiacSign).toBe('Aries');
    });
  
    it('should return the correct zodiac sign for a given month and day at the start range', () => {
      const zodiacSign = getZodiacSign(4, 19, zodiacSigns);
      expect(zodiacSign).toBe('Aries');
    });
  
    it('should return the correct zodiac sign for a given month and day at the end range', () => {
      const zodiacSign = getZodiacSign(5, 20, zodiacSigns);
      expect(zodiacSign).toBe('Taurus');
    });
  
    it('should return null if no zodiac sign is found for the given month and day', () => {
      const zodiacSign = getZodiacSign(2, 15, zodiacSigns);
      expect(zodiacSign).toBeNull();
    });
  });

