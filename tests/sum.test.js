const sum = require('../sum')

// test(name , function , timeout)
// it(name , function , timeout)
// describe(name ,function) //*not required
// describe.only(name ,function) //*skip all describes just do this
// test.only(name , function , timeout) //*skip all tests just do this
// test.skip(name , function , timeout) //*skip this

describe.skip('scheck nums sum', () => {
    test.only('return 0', () => {
        expect(sum()).toBe(0)
    })

    test('return the num', () => {
        expect(sum(3)).toBe(3)
    })

    test('return num 1 + num 2', () => {
        expect(sum(3,10)).toBe(13)
    })

    test('return num 1 + num 2 + num3', () => {
        expect(sum(3,10,10)).toBe(23)
    })

    test('return the sum', () => {
        expect(sum(3,10,10,3,10,190)).toBe(226)
    })
})

