
const {
  readJsonData,
  getZodiacSign,
  getCompatibility
} = require('./zodiac.js');

// Mock the fs.readFileSync function
jest.mock('fs');
fs.readFileSync.mockReturnValue('{"ZodiacSigns": [], "Compatibility": {}}');

describe('getZodiacSign', () => {
  
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


describe('compatible zodiac signs', () => {
  it('should return "OK" for Aries and Taurus', () => {
    const compatibility = getCompatibility('Aries', 'Taurus');
    expect(compatibility).toBe('OK');
  });

  it('should return "OK" for Taurus and Aries', () => {
    const compatibility = getCompatibility('Taurus', 'Aries');
    expect(compatibility).toBe('OK');
  });

  it('should return "POSITIVE" for Taurus and Virgo', () => {
    const compatibility = getCompatibility('Taurus', 'Virgo');
    expect(compatibility).toBe('POSITIVE');
    const compatibility1 = getCompatibility('Virgo', 'Taurus');
    expect(compatibility1).toBe('POSITIVE');
  });

  it('should return "POSITIVE" for Pisces and Cancer', () => {
    const compatibility = getCompatibility('Pisces', 'Cancer');
    expect(compatibility).toBe('POSITIVE');
  });

  it('should return "NEGATIVE" for Taurus and Leo', () => {
    const compatibility = getCompatibility('Taurus', 'Leo');
    expect(compatibility).toBe('NEGATIVE');
  });

  it('should return "NEGATIVE" for Taurus and Gemini', () => {
    const compatibility = getCompatibility('Taurus', 'Gemini');
    expect(compatibility).toBe('NEGATIVE');
  });
});

