
const { exf } = require('./exo01');

describe('Exercise 1', () => {
    test('exf function should print "echo" 5 times', () => {
        const spy = jest.spyOn(console, 'log');
        exf('echo', 5);
        expect(spy).toHaveBeenCalledTimes(5);
        expect(spy).toHaveBeenCalledWith('echo');
        spy.mockRestore();
    });

    test('exf function should print "JS from server" 10 times', () => {
        const spy = jest.spyOn(console, 'log');
        exf('JS from server', 10);
        expect(spy).toHaveBeenCalledTimes(10);
        expect(spy).toHaveBeenCalledWith('JS from server');
        spy.mockRestore();
    });
});
