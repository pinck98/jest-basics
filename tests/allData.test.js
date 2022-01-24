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

test('check if first element in array is not defined', () => {
    expect(allData[0]).not.toBeUndefined()
})

test('check for substring in a string', () => {
    let str = 'hello world'
    expect(str).toMatch(/world/)
})

test('check for a property in object', () => {
    let obj = {
        name : 'sam',
        age : 80
    }
    expect(obj).toHaveProperty('age')
})

test('check for property age is 80', () => {
    let obj = {
        name : 'sam',
        age : 80
    }
    expect(obj).toHaveProperty('age',80)
})

expect.extend({
    toBeBT(recived , target){
        const pass = recived > target
        if(pass){
            return {
                message : () => `Expected ${recived} > &{target}`,
                pass : true
            }
        }else{
            return {
                message : () => `Expected ${recived} > &{target}`,
                pass : false
            }
        }
    }
})

test('ceck if num > num 2', () => {
    expect(10).toBeBT(8)
})

expect.extend({
    toBeBetween(recived , start, end){
        const pass = recived > start && recived < end
        if(pass){
            return {
                message : () => `Expected ${recived} to be between ${start} and ${end}`,
                pass : true
            }
        }else{
            return {
                message : () => `Expected ${recived} to be between ${start} and ${end}`,
                pass : false
            }
        }
    }
})

test('check if num between 2 nums',() => {
    expect(10).toBeBetween(2,19)
})

test('expect anything => any value != null || undefined', () => {
    expect('test').toEqual(expect.anything())
})

test('expect any constructor', () => {
    expect('test').toEqual(expect.any(String))
})

test('expect array containing', () => {
    let arr = [1,2,3,4]
    expect(arr).toEqual(expect.arrayContaining([1,2,4]))
})