const { first } = require('./partie1');

describe('Test for first function', () => {
  test('should return an empty array if the input array is null', () => {
    const result = first(null, 5);
    console.log('Test 1:', result);
    
expect(result).toEqual([]);
  });

  test('should return the first n elements of an array', () => {
    const result = first(['a', 'b', 'c', 'd'], 3);
    console.log('Test 2:', result);

expect(result).toEqual(['a', 'b', 'c']);
  });
});