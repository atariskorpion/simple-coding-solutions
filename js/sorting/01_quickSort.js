function quicksort (array, left, right) {
  if (left >= right) {
    return;
  }

  let mid = Math.floor(left + ((right - left) / 2));
  let pivot = array[mid];
  let index = partition(array, left, right, pivot);

  quicksort(array, left, index -1);
  quicksort(array, index, right);
}

function partition (array, left, right, pivot) {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function swap (array, left, right) {
  let tempLeft = array[left];

  array[left] = array[right];
  array[right] = tempLeft;
}
