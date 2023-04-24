const isUpperCase = require('../utils/mayuscula');

test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})

test('The string COMO ESTAS should return true', () => {
    const result = isUpperCase('como ESTAS');
    expect(result).toBe(true);
})
test('The string ADIOS should return true', () => {
    const result = isUpperCase('AdioS');
    expect(result).toBe(true);

})

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${HELLO}       | ${HELLO}        | ${HELLO}
      ${COMOESTAS}      | ${comoESTAS} | ${COMOESTAS}
      ${ADIOS}      | ${AdioS}         | ${ADIOS}
   

    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });

