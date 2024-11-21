import * as Functions from './functions.js';

export const functionsToTest = [
    {
        title: '1. Check if Number is Greater Than 120',
        func: Functions.checkNumberGreaterThanValue,
        key: 'numbers.toCheck',
    },
    {
        title: '2. Calculate F(x)',
        func: Functions.calculateF,
        key: 'numbers.toCalculate',
    },
    {
        title: '3. Find the Greatest Digit in a Three-Digit Number',
        func: Functions.findGreatestDigit,
        key: 'numbers.threeDigit',
    },
    {
        title: '4. Reverse the Digits of a Four-Digit Number',
        func: Functions.reverseDigits,
        key: 'numbers.fourDigit',
    },
    {
        title: '5. Calculate Y with N Members',
        func: Functions.calculateY,
        key: 'arrays.valuesForY',
    },
    {
        title: '6. Check Nondecreasing Order',
        func: Functions.checkNondecreasingOrder,
        key: 'arrays.toCheckOrder',
    },
    {
        title: '7. Count Digits Equal to 9',
        func: Functions.countNines,
        key: 'numbers.toCountNines',
    },
    {
        title: '8. Generate First 5 Primes Greater Than A',
        func: Functions.generatePrimes,
        key: 'numbers.toFindPrimes',
    },
    {
        title: '9. Find Successive Primes in Interval',
        func: Functions.findPrimesInInterval,
        key: 'numbers.fibonacciInterval',
    },
    {
        title: '10. Filter and Sort Array Based on Conditions',
        func: Functions.filterAndSort,
        key: 'arrays.filterSort',
    },
    {
        title: '11. Check if All Array Elements Are Non-Negative',
        func: Functions.checkNonNegative,
        key: 'arrays.nonNegative',
    },
    {
        title: '12. Combine and Sort Results of Two Arrays',
        func: Functions.combineAndSortArrays,
        key: 'arrays.studentResults',
    },
    {
        title: '13. Insert Array After Greatest Element',
        func: Functions.insertAfterGreatest,
        key: 'arrays.insertAfterGreatest',
    },
    {
        title: '14. Insert Array Before Least Element',
        func: Functions.insertBeforeLeast,
        key: 'arrays.insertBeforeLeast',
    },
    {
        title: '15. Rotate Array to the Left by K Elements',
        func: Functions.rotateArrayLeft,
        key: 'arrays.rotate',
    },
    {
        title: '16. Fibonacci Numbers in Interval (A, B)',
        func: Functions.fibonacciInInterval,
        key: 'numbers.fibonacciInterval',
    },
    {
        title: '17. First Element Smaller Than Largest',
        func: Functions.firstSmallerThanLargest,
        key: 'arrays.firstSmallerThanLargest',
    },
    {
        title: '18. Merge Array Odd and Even Positions',
        func: Functions.mergeArraysOddEven,
        key: 'arrays.mergeOddEven',
    },
    {
        title: '19. Swap Rows in Matrix',
        func: Functions.swapRows,
        key: 'matrices.swapRows',
    },
    {
        title: '20. Calculate B from n and A',
        func: Functions.calculateB,
        key: 'numbers.calculateBValues',
    },
    {
        title: '21. Calculate C with K Members',
        func: Functions.calculateC,
        key: 'numbers.calculateCValues',
    },
    {
        title: '22. Create Array from Matrix Diagonals',
        func: Functions.diagonalsArray,
        key: 'matrices.diagonals',
    },
    {
        title: '23. Compute Product and Sum of Matrix Triangles',
        func: Functions.matrixTriangles,
        key: 'matrices.triangles',
    },
    {
        title: '24. Mirror Swap Triangles in Matrix',
        func: Functions.mirrorSwapMatrix,
        key: 'matrices.mirrorSwap',
    },
];
