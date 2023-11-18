const {chunk}= require('./partie4')

describe('Test for chunk function', () => {
  test('should divide an array into several sub-arrays of predefined size', () => {
const result = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log('Test 1:', result);
expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
  });
  test('should handle cases where the size is greater than the array length', () => {
    const result = chunk([10, 20, 30], 5);
    console.log('Test 2:', result);   
    expect(result).toEqual([[10, 20, 30]]);
      });
    
});




  
 