const input = require('../input')

describe.skip('validate the input field', () => {
    test('name empty', () => {
        expect(input()).toBe('Unknown')
    })

    test('check spaces (start + end)', () => {
        expect(input(' sam ')).toBe('sam')
    })

    test('long name', () => {
        expect(input('Sam_Osama_Ahmed')).toBe('Sam_Osama_')
    })

    test('check if name not start with _', () => {
        expect(input('_Sam')).toBe('Sam')
    })
})