// Write a function that takes a number as an argument and returns 'even' or 'odd'.

const evenOrOdd = (num) => num % 2 === 0 ? 'even' : 'odd';

console.log(evenOrOdd(5)); // Output: 'odd'
console.log(evenOrOdd(4)); // Output: 'even'

// ------------------------------------------------------------

// Create a function that checks if the length of a given string is greater than a specified number. Return true or false.

const isStringLengthGreaterThan = (str, len) => str.length > len ? true : false;

console.log(isStringLengthGreaterThan("Hello, World!", 5)); // Output: true
console.log(isStringLengthGreaterThan("Hello", 5)); // Output: false

// ------------------------------------------------------------

// Implement a function that concatenates two strings and returns the result.

const concatenateStrings = (str1, str2) => str1 + str2;

console.log(concatenateStrings("Hello", "World")); // Output: 'HelloWorld'

// ------------------------------------------------------------

// Write a function using interpolation to generate a string that includes the value of a given variable.

const interpolateVariable = (str, ele) => str + ele;

console.log(interpolateVariable("My age is: ", 25)); // Output: 'My age is: 25'
console.log(interpolateVariable("My age is: ", 30)); // Output: 'My age is: 25'

// ------------------------------------------------------------

// Develop a function that calculates the sum of numbers in a given range.

const sumRange = (start, end) => {
    let sum = 0;
    for (i = start; i <= end; i++) sum += i;
    return sum;
}

console.log(sumRange(1, 5)); // Output: 15
console.log(sumRange(1, 6)); // Output: 21

// ------------------------------------------------------------

// Create a function that sums up all odd numbers in a given range using a loop.

const sumOddNumbersInRange = (start, end) => {
    let sum = 0;
    for (i = start; i <= end; i++) if (i % 2 !== 0) sum += i;
    return sum;
}

console.log(sumOddNumbersInRange(1, 10)); // Output: 25
console.log(sumOddNumbersInRange(1, 11)); // Output: 36

// ------------------------------------------------------------

// Implement a function that returns the first element of an array.

const getFirstElement = (arr) => arr[0];

console.log(getFirstElement([1, 2, 3])); // Output: 1
console.log(getFirstElement([2, 3])); // Output: 2

// ------------------------------------------------------------

// Write a function to get the last element of an array.

const getLastElement = (arr) => arr.at(-1);

console.log(getLastElement([1, 2, 3])); // Output: 3
console.log(getLastElement([1, 2, 3, 4])); // Output: 4

// ------------------------------------------------------------

// Build a function to replace an element at a specific index in an array and returns the altered array.

const replaceElementAtIndex = (arr, index, ele) => {
    arr[index] = ele; return arr;
}

console.log(replaceElementAtIndex([1, 2, 3], 1, 5)); // Output: [1, 5, 3]
console.log(replaceElementAtIndex([1, 2, 3], 2, 6)); // Output: [1, 2, 6]

// ------------------------------------------------------------

// Develop a function that removes an element from the beginning of an array.

const removeFirstElement = (arr) => {
    arr.shift(0); return arr;
}

console.log(removeFirstElement([1, 2, 3])); // Output: [2, 3]
console.log(removeFirstElement([0, 1, 2, 3])); // Output: [1, 2, 3]

// ------------------------------------------------------------

// Create a function to remove an element from the end of an array and return the removed element.

const removeLastElement = (arr) => arr.pop();

console.log(removeLastElement([1, 2, 3])); // Output: 3
console.log(removeLastElement([1, 2, 3, 4])); // Output: 4

// ------------------------------------------------------------

// Implement a function to remove an element at a given index in an array and returns the input array.

const removeElementAtIndex = (arr, index) => {
    arr.splice(index, 1); return arr;
}

console.log(removeElementAtIndex([1, 2, 3], 1)); // Output: [1, 3]
console.log(removeElementAtIndex([1, 2, 3], 2)); // Output: [1, 2]

// ------------------------------------------------------------

// Write a function that converts all characters in a string to uppercase.

const toUpperCaseString = (str) => str.toUpperCase();

console.log(toUpperCaseString("hello")); // Output: 'HELLO'
console.log(toUpperCaseString("world")); // Output: 'WORLD'

// ------------------------------------------------------------

// Create a function to properly capitalize each word in a string of words.

const capitalizeWords = (str) => {
    const arr = str.split(' ');
    const result = [];
    for (let ele of arr) result.push(ele[0].toUpperCase() + ele.slice(1));
    return result.join(' ');
}

console.log(capitalizeWords("hello world")); // Output: 'Hello World'
console.log(capitalizeWords("whats up joe?")); // Output: 'Whats Up Joe?'

// ------------------------------------------------------------

// Develop a function that returns the element at the middle index of an array.

const getMidIndexElement = (arr) => arr[(Math.floor(arr.length / 2))];

console.log(getMidIndexElement([1, 2, 3, 4, 5])); // Output: 3
console.log(getMidIndexElement([1, 2, 3, 4, 5, 6, 7])); // Output: 4

// ------------------------------------------------------------

// Implement a function to calculate the sum of all numbers in an array.

const sumArray = (arr) => arr.reduce((a, b) => a + b);

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// ------------------------------------------------------------

// Create a function that returns the sum of all odd or even numbers in an array.

const sumOddNumbersArray = (arr) => {
    let sum = 0;
    for (ele of arr) if (ele % 2 !== 0) sum += ele;
    return sum;
}

console.log(sumOddNumbersArray([1, 2, 3, 4])); // Output: 4
console.log(sumOddNumbersArray([1, 2, 3, 4, 5])); // Output: 9

// ------------------------------------------------------------

// Write a function to find the maximum number in an array using a loop and the accumulator pattern.

const findMaxUsingLoop = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxUsingLoop([1, 5, 3, 8, 2])); // Output: 8
console.log(findMaxUsingLoop([1, 5, 3, 2])); // Output: 5

// ------------------------------------------------------------

// Develop a function to find the minimum number in an array using the .reduce method.

const findMinUsingReduce = (arr) => arr.reduce((a, b) => a < b ? a : b);

console.log(findMinUsingReduce([1, 5, 3, 8, 2])); // Output: 1
console.log(findMinUsingReduce([5, 3, 8, 2])); // Output: 2

// ------------------------------------------------------------

// Create a function to find the maximum number in an array using Math.max.

const findMaxUsingMathMax = (arr) => { 
    let max = arr[0];
    for (ele of arr) {
        max = Math.max(ele, max);
    }   
    return max;
}


console.log(findMaxUsingMathMax([1, 5, 3, 8, 2])); // Output: 8
console.log(findMaxUsingMathMax([1, 5, 19, 8, 2])); // Output: 19

// ------------------------------------------------------------

// Implement a function to create a new array with all numbers doubled using a for loop and the accumulator pattern.

const doubleNumbersUsingLoop = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    }
    return result;
}

console.log(doubleNumbersUsingLoop([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbersUsingLoop([1, 3, 7, 10])); // Output: [2, 6, 14, 20]

// ------------------------------------------------------------

// Write a function to create a new array with all numbers doubled using the .map method.

const doubleNumbersUsingMap = (arr) => {
    let result = arr.map((num) => num * 2);
    return result;
}

console.log(doubleNumbersUsingMap([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbersUsingMap([1, 3, 7, 10])); // Output: [2, 6, 14, 20]

// ------------------------------------------------------------

// Develop a function to create a new array with only the odd numbers using a for loop and the accumulator pattern.

const oddNumbersUsingLoop = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] & 2 !== 0 ? result.push(arr[i]) : null;
    }
    return result;
}

console.log(oddNumbersUsingLoop([1, 2, 3])); // Output: [1, 3]
console.log(oddNumbersUsingLoop([2, 3, 4, 5, 6, 7])); // Output: [3, 5 ,7]

// ------------------------------------------------------------

// Create a function to create a new array with only the odd numbers using the .filter method.

const oddNumbersUsingFilter = (arr) => {
    let result = arr.filter((num) => num % 2 !==0);
    return result;
}

console.log(oddNumbersUsingFilter([1, 2, 3])); // Output: [1, 3]
console.log(oddNumbersUsingFilter([2, 3, 4, 5, 6, 7])); // Output: [3, 5 ,7]

// ------------------------------------------------------------

// Implement a function to find an element in an array using a for loop and the accumulator pattern. If the element can't be found in the array return an error string

const findElementUsingLoop = (arr, ele) => {
    for (let  i = 0; i < arr.length; i++) {
        if (arr[i] === ele) return arr[i];
    }
    return "ERROR"
}

console.log(findElementUsingLoop([1, 2, 3], 2)); // Output: 2
console.log(findElementUsingLoop(["a", "b", "c", "d"], "c")); // Output: "c"
console.log(findElementUsingLoop([1, 2, 3, 4 ,5], 6)); // Output: "ERROR"

// ------------------------------------------------------------

// Write a function to find an element in an array using the .find method.

const findElementUsingFind = (arr, ele) => arr.find((index) => index === ele) || "ERROR"

console.log(findElementUsingFind(["a", "b", "c", "d"], "c")); // Output: "c"
console.log(findElementUsingFind([1, 2, 3, 4 ,5], 6)); // Output: "ERROR"

// ------------------------------------------------------------

// Develop a function to set a key in an object to a value if it doesn't exist, and return the object. If the key exists, return the object as is.

const setKeyValueInObject = (obj, key, value) => {
    if (!obj[key]) {
        obj[key] = value;
    }
    return obj;
}

console.log(setKeyValueInObject({ key1: 'value1' }, 'key2', 'value2')); 
// Output: { key1: 'value1', key2: 'value2' }

console.log(setKeyValueInObject(  { key1: 'value1' }, 'key1', 'value2')); 
// Output: { key1: 'value1' }

// ------------------------------------------------------------

// Create a function to return a new array with only unique elements from an array with duplicate elements.

const uniqueElementsArray = (arr) => {
    let obj = {};
    for (let i of arr) {
        obj[i] = true;
    }
    let result = Object.keys(obj);
    return result;
}

console.log(uniqueElementsArray([1, 2, 2, 3])); // Output: [1, 2, 3]
console.log(uniqueElementsArray([1, 2, 2, 3, 3, 4, 3, 2])); // Output: [1, 2, 3, 4]

// ------------------------------------------------------------

// Write a function to return an object with the elements as keys and the count of them as values.

const elementsCountObject = (arr) => {
    let result = {};
    for (let i of arr) {
        result[i] = result[i] + 1 || 1;
    }
    return result;
}

console.log(elementsCountObject([1, 2, 2, 3])); 
// Output: { '1': 1, '2': 2, '3': 1 }

console.log(elementsCountObject(["a", "b", "b", "a", "c", "d", "a"])); 
// Output: { a: 3, b: 2, c: 1, d: 1 }

// ------------------------------------------------------------

// Implement a function to return an array of all the keys in an object.

const keysArray = (obj) => Object.keys(obj);

console.log(keysArray({ key1: 'value1', key2: 'value2' }));
// Output: ['key1', 'key2']

// ------------------------------------------------------------

// Develop a function to return an array of all the values in an object.

const valuesArray = (obj) => Object.values(obj);

console.log(valuesArray({ key1: 'value1', key2: 'value2' })); 
// Output: ['value1', 'value2']

// ------------------------------------------------------------

// Write a function to round up a decimal number.

const roundUpDecimal = (num) => Math.ceil(num);

console.log(roundUpDecimal(3.14)); // Output: 4
console.log(roundUpDecimal(5.74)); // Output: 6

// ------------------------------------------------------------

// Implement a function to round down a decimal number.

const roundDownDecimal = (num) => Math.floor(num);

console.log(roundDownDecimal(3.14)); // Output: 3
console.log(roundDownDecimal(5.74)); // Output: 5

// ------------------------------------------------------------

// Develop a function to return the sum of all numbers in an array using the .reduce method.

const sumArrayReduce = (arr) => arr.reduce((a, b) => a + b);

console.log(sumArrayReduce([1, 2, 3, 4])); // Output: 10
console.log(sumArrayReduce([1, 2, 3, 4, 5])); // Output: 15

// ------------------------------------------------------------

// Create a function to return the product of all numbers in an array using the .reduce method.

const productArrayReduce = (arr) => arr.reduce((a, b) => a * b);

console.log(productArrayReduce([1, 2, 3, 4])); // Output: 24
console.log(productArrayReduce([1, 2, 3, 4, 5])); // Output: 120

// ------------------------------------------------------------

// Implement a function to calculate the average of numbers in an array.

const averageArray = (arr) => arr.reduce((a, b) => a + b) / arr.length;

console.log(averageArray([1, 2, 3, 4])); // Output: 2.5
console.log(averageArray([1, 2, 3, 4, 5])); // Output: 3

// ------------------------------------------------------------

// Write a function to calculate the factorial of a given number.

const factorial = (num) => {
    let result = num;
    for (let i = 1; i < num; i++) {
        result *= num - i;
    }
    return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720

// ------------------------------------------------------------

// Develop a function to return the reverse of a given string.

const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString("hello")); // Output: 'olleh'
console.log(reverseString("hello world")); // Output: 'dlrow olleh'

// ------------------------------------------------------------

// Develop a function to convert a temperature from Celsius to Fahrenheit.

const celsiusToFahrenheit = (degree) => ((degree * (9 / 5)) + 32).toFixed(1);


console.log(celsiusToFahrenheit(25)); // Output: 77
console.log(celsiusToFahrenheit(31)); // Output: 87.8

// ------------------------------------------------------------

// Write a function to find the longest word in a given string.

const findLongestWord = (str) => {
    let words = str.split(' ');
    let result = words[0];
    for (let ele of words) {
        if (ele.length > result.length) result = ele; 
    }
    return result;
}

console.log(findLongestWord("The quickest brown fox")); // Output: 'quickest'
console.log(findLongestWord("The brown fox")); // Output: 'brown'

// ------------------------------------------------------------

// Implement a function to count the occurrences of a specific element in an array.

const countOccurrences = (arr, index) => {
    let counter = 0;
    for (let x of arr) {
        if (x === index) counter++;
    }
    return counter;
}

console.log(countOccurrences([1, 2, 2, 3], 2)); // Output: 2
console.log(countOccurrences([1, 2, 2, 3, 4, 5, 3, 3, 3], 3)); // Output: 4
console.log(countOccurrences([1, 2, 2, 3, 4, 5, 3, 3, 3], 7)); // Output: 0

// ------------------------------------------------------------

// Create a function to check if all elements in an array are of the same type.

const areAllSameType = (arr) => {
    let type = typeof(arr[0]);
    for (let ele of arr) {
        if (typeof(ele) !== type) return false;
    }
    return true;
}

console.log(areAllSameType([1, 2, 'three'])); // Output: false
console.log(areAllSameType([1, 2, 3])); // Output: true

// ------------------------------------------------------------

// Implement a function to find the index of the first occurrence of a given element in an array.

const findIndexOfElement = (arr, ele) => arr.indexOf(ele) || "ERROR";

console.log(findIndexOfElement([1, 2, 3], 2)); // Output: 1
console.log(findIndexOfElement([1, 2, 3, 4, 5, 6], 5)); // Output: 4
console.log(findIndexOfElement([1, 2, 3, 4, 5, 6, 4], 4)); // Output: 3

// ------------------------------------------------------------

// Develop a function to reverse the order of elements in an array.

const reverseArray = (arr) => arr.reverse();

console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray([3, 2, 1])); // Output: [1, 2, 3]

// ------------------------------------------------------------

// Implement a function to capitalize the first letter of a string.

const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

console.log(capitalizeFirstLetter("hello")); // Output: 'Hello'
console.log(capitalizeFirstLetter("hello world")); // Output: 'Hello world'

// ------------------------------------------------------------

// Write a function to check if a given number is within a specified range.

const isNumberInRange = (num, start, end) => num >= start && num <= end;

console.log(isNumberInRange(5, 1, 10)); // Output: true
console.log(isNumberInRange(12, 1, 10)); // Output: false

// ------------------------------------------------------------

// Develop a function to count the number of vowels in a string.

const countVowels = (str) => str.match(/[aeiou]/gi).length || 0;

console.log(countVowels("Hello, World!")); // Output: 3
console.log(countVowels("Good Morning")); // Output: 4

// ------------------------------------------------------------

// Write a function to calculate the area of a circle given its radius.

const calculateCircleArea = (rad) => (Math.PI * (rad ** 2)).toFixed(2);

console.log(calculateCircleArea(5)); // Output: 78.54
console.log(calculateCircleArea(6)); // Output: 113.1

// ------------------------------------------------------------

// Develop a function to remove a specific character from a string.

const removeSpecificCharacters = (str, x) => str.split(x).join('');

console.log(removeSpecificCharacters("Hello, World!", "l")); // Output: 'Heo, Word!'
console.log(removeSpecificCharacters("Hello, World!", "o")); // Output: 'Hell, Wrld!'

// ------------------------------------------------------------

// Create a function to find the object with the longest array among an array of objects, each containing a key pointing to an array.

const objectWithLongestArray = (obj) => {
    let result = obj[0];
    for (ele of obj) {
        if (ele.value.length > result.value.length) result = ele;
    }
    return result;
}

console.log(objectWithLongestArray([
  { key: 'array1', value: [1, 2, 3] },
  { key: 'array2', value: [1, 2, 3, 4, 5] }
])); // Output: { key: 'array2', value: [1, 2, 3, 4, 5] }

// ------------------------------------------------------------

// Develop a function to return a new array of only the values of a specified key from an array of objects.

const arrayValuesByKey = (obj, key) => {
    let result = [];
    for (ele of obj) {
        result.push(ele[key]);
    }
    return result;
}

console.log(arrayValuesByKey([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
], 'age')); // Output: [30, 25, 35]

console.log(arrayValuesByKey([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
], 'name')); // Output: ["John", "Jane", "Bob"]

// ------------------------------------------------------------

// Write a function to return the value of a decimal number rounded to the nearest whole number.

const roundToNearestWholeNumber = (num) => Math.round(num);

console.log(roundToNearestWholeNumber(3.5)); // Output: 4
console.log(roundToNearestWholeNumber(3.4)); // Output: 3
console.log(roundToNearestWholeNumber(3.9)); // Output: 4

// ------------------------------------------------------------

// Write a function that takes an object and a property name, and removes the specified property from the object.

const removeProperty = (obj, property) => {
    delete obj[property]; return obj;
}

console.log(removeProperty({ name: 'John', age: 30 }, 'age')); 
// Output: { name: 'John' }

console.log(removeProperty({ name: 'John', age: 30 }, 'name')); 
// Output: { age: 30 }

// ------------------------------------------------------------

// Write a function that takes two objects and merges them into a new object.

const mergeObjects = (obj1, obj2) => Object.assign(obj1, obj2);

console.log(mergeObjects({ name: 'John' }, { age: 30 })); 
// Output: { name: 'John', age: 30 }

// ------------------------------------------------------------

// Write a function that takes an array of objects, each containing a key-value pair with a key pointing to an array, and returns the object with the longest array.

const findObjectWithLongestValue = (obj) => {
    let result = obj[0];
    for (ele of obj) {
        if (ele.value.length > result.value.length) result = ele;
    }
    return result;
}

console.log(findObjectWithLongestValue([
  { key: 'array1', value: [1, 2, 3] },
  { key: 'array2', value: [1, 2, 3, 4, 5, 6] },
  { key: 'array3', value: [1, 2] }
])); // Output: { key: 'array2', value: [1, 2, 3, 4, 5, 6] }

// ------------------------------------------------------------

// Write a function that takes an array of objects and a property name, and sorts the objects in ascending order based on the specified property.

const sortObjectsByProperty = (obj, property) => obj.sort((a, b) => a[property] - b[property]);

console.log(sortObjectsByProperty([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
], 'age')); 
Output: [ { name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 } ]

// ------------------------------------------------------------

// Write a function to remove duplicates from an array.

const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]

// ------------------------------------------------------------

// BONUS

// ------------------------------------------------------------

// Write a function that takes an array of objects, a property name, and a property value. It filters the objects based on the given property and value, returning an array of matching objects.

const filterObjectsByProperty = (obj, key, value) => obj.filter((ele) => ele[key] === value);

console.log(filterObjectsByProperty([
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'San Francisco' },
  { name: 'Bob', age: 35, city: 'New York' }
], 'city', 'New York')); 
// Output: [ { name: 'John', age: 30, city: 'New York' }, { name: 'Bob', age: 35, city: 'New York' } ]

// ------------------------------------------------------------

// Create a function that checks if a string is a palindrome.

const isPalindrome = (str) => str === str.split('').reverse().join('');

console.log(isPalindrome("racecar")); // Output: true

// ------------------------------------------------------------

// Implement a function to remove white spaces from both ends of a string.

const trimWhitespace = (str) => str.trim();

console.log(trimWhitespace("  hello  ")); // Output: 'hello'

// ------------------------------------------------------------

// Write a function to check if a given string contains a specific substring.

const containsSubstring = (str, subStr) => str.includes(subStr);

console.log(containsSubstring("Hello, World!", "World")); // Output: true

// ------------------------------------------------------------

// Create a function to generate a random number within a specified range.

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (min - max + 1)) + max;


console.log(generateRandomNumber(1, 10)); // Output: Random number between 1 and 10

// ------------------------------------------------------------

// Develop a function to find the second largest number in an array.

const findSecondLargestNumber = (arr) => arr.sort((a, b) => b - a)[1];

console.log(findSecondLargestNumber([1, 5, 3, 8, 2])); // Output: 5

// ------------------------------------------------------------

// Develop a function to sort an array of strings in alphabetical order.

const sortAlphabetically = (arr) => arr.sort();

console.log(sortAlphabetically(["banana", "apple", "orange"])); // Output: ['apple', 'banana', 'orange']

// ------------------------------------------------------------

// Write a function to check if a number is prime.

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

console.log(isPrime(7)); // Output: true

// ------------------------------------------------------------

// Create a function to merge two sorted arrays into a new sorted array.

const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b);

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// ------------------------------------------------------------

// Implement a function to extract numbers from a string and return them as an array.

const extractNumbersFromString = (str) => {
  let arr = [];
  for (let x of str) {
    if (!isNaN(x) && x !== ' ') arr.push(parseInt(x));
  }
  return arr;
}

console.log(extractNumbersFromString("Age: 25, Height: 180cm")); // Output: [2, 5, 1, 8, 0]

// ------------------------------------------------------------

// Write a function to calculate the area of a rectangle given its length and width.

const calculateRectangleArea = (l, w) => l * w;

console.log(calculateRectangleArea(5, 10)); // Output: 50

// ------------------------------------------------------------

// Create a function to generate a Fibonacci sequence up to a specified number of terms.

const generateFibonacciSequence = (n) => {
    const fibArr = [0, 1]; 
    while (fibArr.length < n) {
        fibArr.push(fibArr.at(-1) + fibArr.at(-2));
    }
    return fibArr;
}

console.log(generateFibonacciSequence(5)); // Output: [0, 1, 1, 2, 3]

// ------------------------------------------------------------

// Write a function to check if a given year is a leap year.

const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2024)); // Output: true

// ------------------------------------------------------------

// Develop a function to convert a decimal number to a binary number.

const decimalToBinary = (num) => num.toString(2);

console.log(decimalToBinary(10)); // Output: '1010'

// ------------------------------------------------------------

// Create a function to reverse the order of words in a sentence.

const reverseWordsInSentence = (str) => str.split(' ').reverse().join(' ');

console.log(reverseWordsInSentence("Hello, World!")); // Output: 'World! Hello,'

// ------------------------------------------------------------

// Implement a function to check if two strings are anagrams.

const areAnagrams = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');

console.log(areAnagrams("listen", "silent")); // Output: true

// ------------------------------------------------------------

// Write a function to check if a number is a power of two.

const isPowerOfTwo = (num) => ((num & (num - 1)) === 0);

console.log(isPowerOfTwo(16)); // Output: true

// ------------------------------------------------------------

// Develop a function to rotate elements in an array to the left by a given number of positions.

const rotateArrayLeft = (arr, x) => arr.slice(x).concat(arr.slice(0, x));

console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]

// ------------------------------------------------------------

// Create a function to find the difference between two arrays.

function findArrayDifference(arr1, arr2) {
  const result = [...new Set(arr1)].concat([...new Set(arr2)]);
  return result.filter((ele) => result.indexOf(ele) === result.lastIndexOf(ele));
}

console.log(findArrayDifference([1, 2, 3], [2, 3, 4])); // Output: [1, 4]

// ------------------------------------------------------------

// Implement a function to calculate the square root of a given number.

const calculateSquareRoot = (num) => Math.sqrt(num);

console.log(calculateSquareRoot(25)); // Output: 5

// ------------------------------------------------------------

// Write a function to generate a random password of a specified length.

const generateRandomPassword = (len) => {
  let password = "";
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

  while (password.length <= len) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

console.log(generateRandomPassword(8)); // Output: Random password

// ------------------------------------------------------------

// Develop a function to find the union of two arrays.

const findArrayUnion = (arr1, arr2) => [...new Set(arr1.concat(arr2))]

console.log(findArrayUnion([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

// ------------------------------------------------------------

// Create a function to check if a string is a valid email address.

const isValidEmailAddress = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)

console.log(isValidEmailAddress("asayedahmed@pursuit.com")); // Output: true

// ------------------------------------------------------------

// Create a function to find the maximum sum of subarray of a given array.

const maxSumSubarray = (arr) => {
  let maxVal = arr[0] + arr[1];
  
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + arr[i + 1]) > maxVal) {
      maxVal = arr[i] + arr[i + 1];
    }
  }

  return maxVal;
}

console.log(maxSumSubarray([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 7

// ------------------------------------------------------------

// Implement a function to convert a binaey number to deicmal.

const binaryToDecimal = (num) => parseInt(num, 2)

console.log(binaryToDecimal(1010)); // Output: '10'

// ------------------------------------------------------------

// Write a function to check if a given array is sorted in ascending order.

const isArraySortedAscending = (arr) => arr.toString() === [...arr].sort((a, b) => a - b).toString();

console.log(isArraySortedAscending([1, 2, 3, 4])); // Output: true 
console.log(isArraySortedAscending([1, 4, 3, 4])); // Output: false 

// ------------------------------------------------------------

// Create a function to check if a string contains only digits.

const containsOnlyDigits = (str) => /^\d+$/.test(str);

console.log(containsOnlyDigits("123")); // Output: true
console.log(containsOnlyDigits("fjfkasfs")); // Output: false

// ------------------------------------------------------------

// Implement a function to generate a random color code.

const generateRandomColorCode = () => {
  const red = parseInt(Math.random() * 256).toString(16).padStart(2, '0');
  const green = parseInt(Math.random() * 256).toString(16).padStart(2, '0');
  const blue = parseInt(Math.random() * 256).toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`.toUpperCase();
}

console.log(generateRandomColorCode()); // Output: Random color code

// ------------------------------------------------------------

// Develop a function to check if a given string is a valid palindrome sentence.

const isValidPalindromeSentence = (str) => {
  let newS = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let l = 0; r = newS.length - 1;
  while(l < r) {
    if (newS[l] !== newS[r]) {
      return false
    }

    l++;
    r--;
  }
  return true;
}

console.log(isValidPalindromeSentence("A man, a plan, a canal, Panama!")); // Output: true

// ------------------------------------------------------------

// Create a function to find the mode of an array.

const findArrayMode = (arr) => {
  const countMap = new Map();

  arr.forEach((element) => {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  });

  let maxFrequency = 0;

  countMap.forEach((frequency) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
    }
  });

  const mode = [];

  countMap.forEach((frequency, element) => {
    if (frequency === maxFrequency) {
      mode.push(element);
    }
  });

  return mode;
}

console.log(findArrayMode([1, 2, 2, 3, 3, 4])); // Output: [2, 3]

// ------------------------------------------------------------

// Implement a function to convert a Roman numeral to an integer.

const romanToInteger = (s) => {
  const rnVal = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let curVal = rnVal[s[i]];
    let nextVal = rnVal[s[i + 1]];

    if (nextVal && curVal < nextVal) {
      sum += nextVal - curVal;
      i++;
    } else sum += curVal;
  }

  return sum;
};

console.log(romanToInteger("XIV")); // Output: 14

// ------------------------------------------------------------

// Write a function to check if a given string is a valid URL.

const isValidURL = (str) => /^(https):\/\/[^\s/$.?#].[^\s]*$/.test(str)

console.log(isValidURL("https://www.example.com")); // Output: true

// ------------------------------------------------------------

// Develop a function to find the greatest common divisor (GCD) of two numbers.

const findGCD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return Math.abs(num1);
}

console.log(findGCD(24, 36)); // Output: 12

// ------------------------------------------------------------

// Create a function to reverse the bits of a given number.

const reverseBits = (num) => {
  let result = 0;
  const numBits = 32;

  for (let i = 0; i < numBits; i++) {
    result = (result << 1) | (num & 1);
    num = num >> 1;
  }

  return result >>> 0;
}

console.log(reverseBits(5)); // Output: 2684354560

// ------------------------------------------------------------

// Implement a function to perform basic string compression using the counts of repeated characters.

const compressString = (str) => {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + (count > 1 ? count : '');
      count = 1;
    }
  }

  return compressed;
}

console.log(compressString("aaabbbccc")); // Output: 'a3b3c3'

// ------------------------------------------------------------

// Write a function to convert a decimal number to hexadecimal.

// console.log(decimalToHexadecimal(255)); // Output: 'FF'

// ------------------------------------------------------------

// Create a function to check if a number is a palindrome.

// console.log(isNumberPalindrome(121)); // Output: true

// ------------------------------------------------------------

// Implement a function to calculate the sum of digits in a given number.

// console.log(calculateSumOfDigits(123)); // Output: 6

// ------------------------------------------------------------

// Write a function to find the least common multiple (LCM) of two numbers.

// console.log(findLCM(12, 18)); // Output: 36

// ------------------------------------------------------------

// Develop a function to find the longest common prefix of an array of strings.

// console.log(findLongestCommonPrefix(["apple", "apricot", "apex"])); // Output: 'ap'

// ------------------------------------------------------------

// Create a function to find the missing number in an array of consecutive numbers.

const findMissingNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i] + 1;
    }
  }
}

console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4

// ------------------------------------------------------------

// Implement a function to check if a given string is an integer or a floating-point number.

// console.log(isValidNumber("123.45")); // Output: true

// ------------------------------------------------------------

// Write a function to check if a given number is a Fibonacci number.

// console.log(isFibonacciNumber(21)); // Output: true

// ------------------------------------------------------------