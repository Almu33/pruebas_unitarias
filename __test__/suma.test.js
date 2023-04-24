const sum = require('../utils/suma')


test("sumar 1+2 igual a 3", () => {
expect(sum(1,2)).toBe(3)

})
test("sumar 3+4 igual a 7", () => {
    expect(sum(3,4)).toBe(7)

})
    test("sumar 18+45 igual a 65", () => {
        expect(sum(18,45)).toBe(65)
})


describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${1}       | ${2}        | ${3}
      ${3}      | ${4}         | ${7}
      ${18}      | ${45}       | ${63}

    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });
