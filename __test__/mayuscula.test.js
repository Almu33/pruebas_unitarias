const isUpperCase = require('../utils/mayuscula');

test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})

test('The string COMO ESTAS should return true', () => {
    const result = isUpperCase('comoESTAS');
    expect(result).toBe(false);
})
test('The string ADIOS should return true', () => {
    const result = isUpperCase('AdioS');
    expect(result).toBe(false);

})

describe('calculator', () => {
    test.each`
      firstValue | expectedResult    
      ${'HELLO'}           | ${true}
      ${'COMOESTAS'}       | ${true}
      ${'AdioS'}           | ${false}
   

    `('$firstValue + should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });

