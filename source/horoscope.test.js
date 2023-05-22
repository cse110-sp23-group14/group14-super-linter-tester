const t = require('./horoscope')  //reqeust the function we are going to test from our javascript file

user=1;
test('properly adds two numbers', ()=>{
  expect(generateHoroscope(user)).toBe("I love astrology!")
})