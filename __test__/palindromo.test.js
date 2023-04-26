const palindromo = require('../utils/palindromo.js')

test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')
  })
    test ('palindromo de almu', () => {
        const result = palindromo('almu')
        expect(result).toBe('umla')
    })

    test ('palindromo de marga', () => {
        const result = palindromo('marga')
        expect(result).toBe('agram')
    })

    test ('palindromo de jaime', () => {
        const result = palindromo('jaime')
        expect(result).toBe('emiaj')
    })
    describe('palindromo', () => {
      test.each`
        string        | expectedResult    
        ${'roma'}       | ${'amor'}
        ${'ojo'}        | ${'ojo'}
        ${'rata'}       | ${'atar'}
      `('$string should return $expectedResult', ({string, expectedResult}) => {
        expect(palindromo (string)).toBe(expectedResult);
      });
    });
