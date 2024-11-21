// 1. An integer number A is given.
// Check if the number A is greater than 120.
// Print the report.
export function checkNumberGreaterThanValue(A) {
    return A > 120 ? `The number ${A} is greater than 120.` : `The number ${A} is not greater than 120.`;
}

// 2. Calculate the value F(x)
// F(X) = 10x^4 -8,  for x > 10
// F(X) = 1000, for x = 10
// F(X) = 100 - 1/(10+2x), for x < 10
export function calculateF(x) {
    if (x > 10) {
        return 10 * Math.pow(x, 4) - 8;
    } else if (x === 10) {
        return 1000;
    } else {
        return 100 - 1 / (10 + 2 * x);
    }
}

// 3. A three-digit integer number is given.
// What is the greatest digit?
export function findGreatestDigit(number) {
    const digits = number.toString().split('').map(Number);
    const greatestDigit = Math.max(...digits);
    return `The greatest digit in ${number} is ${greatestDigit}.`;
}

// 4. A 4-digit integer number is given
// Make the number that is inverse order of the digits.
// In example given is 1234 the output is 4321.
export function reverseDigits(number) {
    const reversed = number.toString().split('').reverse().join('');
    return `The number ${number} reversed is ${reversed}.`;
}

// 5. Given are integer numbers X an N.
// Calculate Y = 10 + X/2 + 2/(3X) + 3X/4 + 4/(5X) + ..... 
// Y have N members.
export function calculateY(X, N) {
    let Y = 10;
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            Y += i / ((i + 1) * X);
        } else {
            Y += (i + 1) / (i * X);
        }
    }
    return `Y = ${Y.toFixed(5)}`;
}

// 6. Given is integer positive number A, and A numbers of D.
// Check if numbers are in nondecreasing order.
export function checkNondecreasingOrder(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Invalid input: Expected an array of numbers.';
    }

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            return `The numbers ${numbers.join(', ')} are not in nondecreasing order.`;
        }
    }
    return `The numbers ${numbers.join(', ')} are in nondecreasing order.`;
}

// 7. Given is integer number A.
// How many digits are 9?
export function countNines(A) {
    const digits = A.toString().split('');
    const count = digits.filter(digit => digit === '9').length;
    return `The number ${A} contains ${count} digit(s) of 9.`;
}

// 8. Given is integer positive number A.
// Create first 5 prime numbers greater from A.
export function generatePrimes(A) {
    const primes = [];
    let num = A + 1;
    while (primes.length < 5) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return `The first 5 prime numbers greater than ${A} are: ${primes.join(', ')}.`;
}

export function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 9. Given is interval (B, C) print all successive prime number from given interval.
export function findPrimesInInterval(B, C) {
    const primes = [];
    for (let i = B + 1; i < C; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return `The successive primes in the interval (${B}, ${C}) are: ${primes.join(', ')}.`;
}

// 10. Given are arrays A(I) of K elements and X(J) of K elements.
// Array elements A(I) which are not greater from elements of array X(J) sort in nondecreasing order.
// Do not use helper array.
// In example 
// A(I) = [2,100,17,120,35,66,1,3,2,100]
// X(J) = [300,18,130,122,100]
// Result:
// A(I) = [1,2,2,3,17]
export function filterAndSort(A, X) {
    if (!Array.isArray(A) || !Array.isArray(X)) {
        return 'Invalid input data: A or X is not an array.';
    }
    const minLength = Math.min(A.length, X.length);
    const filtered = [];
    for (let i = 0; i < minLength; i++) {
        if (A[i] <= X[i]) {
            filtered.push(A[i]);
        }
    }
    filtered.sort((a, b) => a - b);
    return `Resulting array: ${filtered.join(', ')}`;
}

// 11. Given is array B(K) of L elements.
// Check if all array elements B(K) not negative numbers.
export function checkNonNegative(array) {
    if (!Array.isArray(array)) {
        return 'Invalid input: Expected an array.';
    }

    const allNonNegative = array.every(num => num >= 0);
    return allNonNegative
        ? `All elements in [${array.join(', ')}] are non-negative.`
        : `Some elements in [${array.join(', ')}] are negative.`;
}

// 12. British and French students took the same math test.
// The tests results - points are put in arrays B(J) from S elements (British) and F(K) from D elements (French).
// Print combined tests (British and French) results sorted by success.
// Do not use helper array.
export function combineAndSortArrays(british, french) {
    const combined = british.concat(french);
    for (let i = 0; i < combined.length; i++) {
        for (let j = i + 1; j < combined.length; j++) {
            if (combined[i] > combined[j]) {
                const temp = combined[i];
                combined[i] = combined[j];
                combined[j] = temp;
            }
        }
    }
    return `Combined and sorted results: ${combined.join(', ')}`;
}

// 13. Given is array A(I) of R elements.
// And given is array D(L) of N elements.
// Insert array D(L) to array A(I) after greatest element of array A(I).
// Do not use helper array and built-in functions.
export function insertAfterGreatest(A, D) {
    if (!Array.isArray(A) || !Array.isArray(D)) {
        return 'Invalid input: Both A and D must be arrays.';
    }

    let maxIndex = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[maxIndex]) maxIndex = i;
    }

    for (let i = 0; i < D.length; i++) {
        A.splice(maxIndex + 1 + i, 0, D[i]);
    }

    return `Resulting array: ${A.join(', ')}`;
}

// 14. Given is array X(I) of N elements.
// And array A(J) of K elements.
// Insert array A(J) in to array X(I) before least element of array X(I).
// Do not use helper array and built-in functions.
export function insertBeforeLeast(X, A) {
    if (!Array.isArray(X) || !Array.isArray(A)) {
        return 'Invalid input: Both X and A must be arrays.';
    }

    let minIndex = 0;
    for (let i = 1; i < X.length; i++) {
        if (X[i] < X[minIndex]) minIndex = i;
    }

    for (let i = 0; i < A.length; i++) {
        X.splice(minIndex + i, 0, A[i]);
    }

    return `Resulting array: ${X.join(', ')}`;
}

// 15. Given is array X(I) from N elements and integer positive number K.
// Rotate elements of array for K elements to the left.
// Do not use built-in functions.
export function rotateArrayLeft(X, K) {
    const N = X.length;
    K = K % N;
    for (let i = 0; i < K; i++) {
        const first = X[0];
        for (let j = 0; j < N - 1; j++) {
            X[j] = X[j + 1];
        }
        X[N - 1] = first;
    }
    return `Array after rotation: ${X.join(', ')}`;
}

// 16. Given are integer positive numbers A and B.
// Create and print array A(I) from all Fibonacci numbers who belongs to the interval (A,B).
export function fibonacciInInterval(A, B) {
    const fib = [];
    let a = 0, b = 1;
    while (b <= B) {
        if (b > A) fib.push(b);
        const next = a + b;
        a = b;
        b = next;
    }
    return `Fibonacci numbers in interval (${A}, ${B}): ${fib.join(', ')}`;
}

// 17. Given is array X(I) from N elements.
// On which position is the first element smaller than the largest element of the array?
export function firstSmallerThanLargest(X) {
    if (!Array.isArray(X)) {
        return 'Error: Input is not an array.';
    }
    const largest = Math.max(...X);
    for (let i = 0; i < X.length; i++) {
        if (X[i] < largest) {
            return `First element smaller than largest (${largest}), is in position ${i}.`;
        }
    }
    return `No elements less than the largest (${largest}).`;
}

// 18. Given is array A(I) from N elements.
// And array B(K) from N elements.
// Create a new array which will first contain elements of the array A(I) with odd position, and then elements of the array B(K)  with even position.
export function mergeArraysOddEven(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B)) {
        return 'Invalid input: Both A and B must be arrays.';
    }

    const result = [];
    for (let i = 0; i < A.length; i += 2) {
        result.push(A[i]);
    }
    for (let i = 1; i < B.length; i += 2) {
        result.push(B[i]);
    }
    return `Resulting array: ${result.join(', ')}`;
}

// 19. Given is martix M(I,J) with dimenzions 2N*2K.
// Swap 1st and 3rd row.
// Swap 2nd and 4th row.
// Swap 5th and 7th row.
// ...
// and so on until end.
export function swapRows(matrix) {
    for (let i = 0; i < matrix.length; i += 4) {
        if (i + 2 < matrix.length) {
            [matrix[i], matrix[i + 2]] = [matrix[i + 2], matrix[i]];
        }
        if (i + 3 < matrix.length) {
            [matrix[i + 1], matrix[i + 3]] = [matrix[i + 3], matrix[i + 1]];
        }
    }
    return matrix.map(row => Array.isArray(row) ? row.join(', ') : 'incorrect row').join('\n');
}

// 20. Given are integer positive numbers n and A
// Calculate:
// B = nA+ (n-1)A^2+(n-2)A^3+....+A^n
export function calculateB(n, A) {
    let B = 0;
    for (let i = 0; i < n; i++) {
        B += (n - i) * Math.pow(A, i + 1);
    }
    return `B = ${B}`;
}

// 21. Given are integer positive numbers A and K
// C = a!/2! + (a+2)!/3! + (a+4)!/4! +....
// C have K members.
export function calculateC(A, K) {
    let C = 0;
    for (let i = 0; i < K; i++) {
        const numerator = factorial(A + 2 * i);
        const denominator = factorial(i + 2);
        C += numerator / denominator;
    }
    return `C = ${C}`;
}

export function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// 22. Given is integer positive number N and quadratic matrix A(I,J) with dimension N*N.
// Create array which first contains elements of the main diagonal and then elements of antidiagonal.
export function diagonalsArray(matrix) {
    const mainDiagonal = [];
    const antiDiagonal = [];
    const N = matrix.length;

    for (let i = 0; i < N; i++) {
        mainDiagonal.push(matrix[i][i]);
        antiDiagonal.push(matrix[i][N - i - 1]);
    }

    return `Array: ${mainDiagonal.concat(antiDiagonal).join(', ')}`;
}

// 23. Given is integer positive number N and quadratic matrix B(I,J) with dimension N*N.
// Compute and print product of elements of triangle bellow main diagonal and sum of elements of triangle above main diagonal.
export function matrixTriangles(B) {
    const N = B.length;
    let productBelow = 1;
    let sumAbove = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i > j) productBelow *= B[i][j];
            if (i < j) sumAbove += B[i][j];
        }
    }

    return `Product below diagonal: ${productBelow}, Sum above diagonal: ${sumAbove}`;
}

// 24. Given is integer positive number N and quadratic matrix C(I,J) with dimension N*N.
// Mirror swap content of triangle above antidiagonal with triangle bellow antidiagonal.
export function mirrorSwapMatrix(C) {
    if (!Array.isArray(C) || C.some(row => !Array.isArray(row))) {
        return 'Invalid input: C must be a matrix (array of arrays).';
    }

    const N = C.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            const temp = C[i][j];
            C[i][j] = C[N - j - 1][N - i - 1];
            C[N - j - 1][N - i - 1] = temp;
        }
    }

    return C.map(row => Array.isArray(row) ? row.join(', ') : 'Invalid row').join('\n');
}
