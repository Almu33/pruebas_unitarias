const palindromo = require('../utils/palindromo.js')

test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')

    test ('palindromo de almu', () => {
        const result = palindromo('almu')
        expect(result).toBe('ulma')
    })

    test ('palindromo de marga', () => {
        const result = palindromo('marga')
        expect(result).toBe('agram')
    })

    test ('palindromo de jaime', () => {
        const result = palindromo('jaime')
        expect(result).toBe('emjai')
    })
    describe('calculator', () => {
        test.each`
          firstValue | secondValue | expectedResult    
          ${fran}       | ${narf}        | ${narf}
          ${almu}      | ${ulma}         | ${ulma}
          ${marga}      | ${agram}       | ${agram}
          ${jaime}}      | ${emjai}       | ${emiaj}
    
        `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
          expect(sum(firstValue, secondValue)).toBe(expectedResult);
        });
      });
    });