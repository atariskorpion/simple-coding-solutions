/**
 * Example usage: binarySearchRecursive(array, 42, 0, array.length - 1)
 */
function binarySearchRecursive (array, x , left, right) {
  if (left > right) {
    return false;
  }

  let mid = Math.floor(left + ((right - left) / 2));

  if (array[mid] === x) {
    return mid;
  } else if (x < array[mid]) {
    binarySearchRecursive(array, x, left, mid - 1);
  } else {
    binarySearchRecursive(array, x, mid + 1, right);
  }

  return -1;
}

/**
 * Example usage: binarySearchIterative(array, 42)
 */
function binarySearchIterative (array, x) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + ((right - left) / 2));

    if (array[mid] === x) {
      return mid;
    } else if (x < array[mid]) {
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
