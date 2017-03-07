function insertionSort (A = []) {

  var valueIndex;
  var value;

  for (i = 1; i < A.length; i++) {
    valueIndex = i;
    value = A[i];

    while (valueIndex > 0 && A[valueIndex - 1] > value) {
      A[valueIndex] = A[valueIndex - 1];
      valueIndex = valueIndex - 1;
    }

    A[valueIndex] = value;
  }

  return A;
}
