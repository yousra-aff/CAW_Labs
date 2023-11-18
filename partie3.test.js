const originalConsoleLog = console.log;


const mockConsoleLog = jest.fn();
console.log = mockConsoleLog;

require('./partie3');


console.log = originalConsoleLog;

describe('Array Operations', () => {
    test('toString should log the concatenated string with commas', () => {
        expect(mockConsoleLog.mock.calls[0][0]).toBe('Red,Green,White,Black');
    });

    test('join without argument should log the concatenated string with commas', () => {
        expect(mockConsoleLog.mock.calls[1][0]).toBe('Red,Green,White,Black');
    });

    test('join with an empty string argument should log the concatenated string without separators', () => {
        expect(mockConsoleLog.mock.calls[2][0]).toBe('RedGreenWhiteBlack');
    });
});

