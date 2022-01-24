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

test('check if array contains string', () => {
    for(let i; i < allData.length; i++){
        expect(isNaN(allData[i])).toBe(false)
    }
})

test('check if array contains string (methode 2)', () => {
    for(let i; i < allData.length; i++){
        expect(isNaN(allData[i])).toBeFalsy()
    }
})

test('check if first element in array >= 1', () => {
    expect(allData[0]).toBeGreaterThanOrEqual(1)
})

test('check if first element in array <= 3', () => {
    expect(allData[0]).toBeLessThanOrEqual(3)
})