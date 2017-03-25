function quicksort (A, left, right) {
  if (left >= right) {
    return;
  }

  let mid = Math.floor(left + ((right - left) / 2));
  let pivot = A[mid];
  let index = partition(A, left, right, pivot);

  quicksort(A, left, index -1);
  quicksort(A, index, right);
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

function swap (A, i, j) {
  let tempValue = A[i];

  A[i] = A[j];
  A[j] = tempValue;

  return A;
}
