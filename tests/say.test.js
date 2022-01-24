const hello = require('../say');

test('say hello', () => {
    expect(hello()).toBe('hello')
})