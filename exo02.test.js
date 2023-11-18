
const { mean } = require('./exo02');

describe('Exercise 2', () => {
    test('mean function should calculate the average of an array of scores', () => {
        const scores = [20, 15, 81, 50, 33];
        const result = mean(scores);
        expect(result).toBeCloseTo(39.8, 1); 
    });

    test('mean function should return 0 for an empty array', () => {
        const result = mean([]);
        expect(result).toBe(0);
    });
});
