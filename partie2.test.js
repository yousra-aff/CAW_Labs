const { last } = require('./partie2'); 

describe('Test for last function', () => {
  test('should return an empty array if the input array is null', () => {
    const result = last(null, 3);
    console.log('Test 1:', result);
    expect(result).toEqual([]);
  });

  
  
test('should return the last n elements of an array', () => {
    const result = last(['a', 'b', 'c', 'd'], 2);
    console.log('Test 2:', result);
    expect(result).toEqual(['c', 'd']);
  });
  
  });

