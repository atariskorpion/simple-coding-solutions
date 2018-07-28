import { quickSort } from './sorting';
import { binarySearch, binarySearchIterative } from './search';

const values = [54,26,93,17,77,31,44,55,20];
console.log(values);
let sortedValues = quickSort(values, 0, values.length - 1);
console.log(sortedValues);
console.log('Position %s ', binarySearch(sortedValues, 31));
console.log('Position %s ', binarySearchIterative(sortedValues, 31));