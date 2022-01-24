const mocker = require('../mock')

test('mock function', () => {
    const mocker = jest.fn(name => `Hello ${name}`)
    expect(mocker('osama')).toBe('Hello osama')
    expect(mocker).toHaveBeenCalled()
    expect(mocker).toHaveBeenCalledTimes(1)
    expect(mocker).toHaveBeenCalledWith('osama')
    expect(mocker).toHaveBeenLastCalledWith('osama') //if last call with osama
})