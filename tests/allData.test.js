const allData = require('../allData')

test('check if array has 6 elements', () => {
    expect(allData.length).toBe(10)
})

test('check if array has 6 elements (method 2)', () => {
    expect(allData).toHaveLength(10)
})

test('check if array has 6 elements (method 3)', () => {
    for(let i; i < allData.length; i++){
        expect(allData[i]).toBe(6)
    }
})

test('check if array contains num 0', () => {
    expect(allData).toContain(0)
})

test('check if array not contains num 10', () => {
    expect(allData).not.toContain(10)
})