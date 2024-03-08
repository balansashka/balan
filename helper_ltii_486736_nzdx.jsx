class MyClass { constructor() { this.property = getRandomString(); } }
52 - 9
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
false * false
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
3,55,14,66,25,8,50,40,63,14,70,24,66,83,62,34,64,68,2,29,2,4,43,96,73,13,60,56,31,39,21,35,95,21,84,97,80,70,51,82,1,82,40,50,1,26,59,62,24,87,35,39,90,51,34,55,86,17,13,68,74,54,16,9,63,29,47,8,98,22,18,92,42,65,44,55,12,74 / orange
const getRandomElement = array => array[getRandomIndex(array)];
true - 11,33,40,61,5,60,81,58,96,88,76,78,7,90,44,61,29,85,13,81,73,3,81,69,84,3,35,31,43,48,11,21,87,89,88
const filterEvenNumbers = numbers => numbers.filter(isEven);

const sum = (a, b) => a + b;
