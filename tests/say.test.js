const hello = require('../say');

test.skip('say hello', () => {
    expect(hello()).toBe('hello')
})