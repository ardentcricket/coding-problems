 import { isAnagram, stringSplit, isAnagramWithSplit } from "./isAnagram";
 import { findMax } from './maxminNumber'
 import { bubbleSort, swap, reverseString } from './sort'
 import { factorial } from './recursion'

 describe('coding problem tests', () => {

  test('is anagram', () => {
    expect(isAnagram('elbow', 'below')).toBeTruthy();
    expect(isAnagram('ellbow', 'below')).toBeFalsy();
  });

  test('is string split', () => {
    expect(stringSplit('elbow')).toStrictEqual(['e', 'l', 'b', 'o', 'w']);
    expect(stringSplit('elbow t')).toStrictEqual(['e', 'l', 'b', 'o', 'w', ' ', 't'])
    expect(stringSplit('')).toBeFalsy();
    expect(stringSplit(32323)).toBeFalsy()
  });

  test('is Anagram with Split', () => {
    expect(isAnagramWithSplit('elbow', 'below')).toBeTruthy();
    expect(isAnagramWithSplit('eLbow', 'Below')).toBeTruthy();
    expect(isAnagramWithSplit('ellbow', 'below')).toBeFalsy();
    expect(isAnagramWithSplit('Motherin Law', 'Hitler Woman')).toBeTruthy();

  });

  test('whether find max works', () => {
    expect(findMax([32, 5,4,2 ])).toBe(32);
    expect(findMax([])).toStrictEqual([]);
    expect(findMax(null)).toStrictEqual([]);
  })

  test('whether sort works as expected', () => {
    expect(bubbleSort([32, 5,4,2])).toStrictEqual([2,4,5,32]);
    expect(bubbleSort([])).toStrictEqual([]);
    expect(bubbleSort(null)).toStrictEqual([]);
  })

  test('whether swap works as expected', () => {
    expect(swap(1,2)).toStrictEqual({ first: 2, second: 1 })
  })

   test('whether reverse string', () => {
     [
       { string: 'nikhil', expectedResult: 'lihkin' },
       { string: 'formula1', expectedResult: '1alumrof' },
       { string: '', expectedResult: '' },
       { string: null, expectedResult: '' }].
       forEach(test => {
         expect(reverseString(test.string)).toBe(test.expectedResult)
       })
   })
  
   test('whether factorial recursion works', () => {
     [
       { number: 5, expectedResult: 120 },
       { number: 0, expectedResult: 0 },
       { number: 1, expectedResult: 1 },
       { number: -1, expectedResult: 'Missing or negative number' },
       { number: -5, expectedResult: 'Missing or negative number' },
       { number: null, expectedResult: 'Missing or negative number' },
       { number: undefined, expectedResult: 'Missing or negative number' }
      ].forEach(
         test => {
           expect(factorial(test.number)).toBe(test.expectedResult)
         }
       )
   })

 })