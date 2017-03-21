function selectionSort (A = []) {

  var valueIndex;
  var tempValue;

  for (i = 0; i < A.length; i++) {
    valueIndex = i;

    for (j = i+1; j < A.length; j++) {
      if(A[j] < A[valueIndex]) {
        valueIndex = j;
      }
    }

    tempValue = A[i];
    A[i] = A[valueIndex];
    A[valueIndex] = tempValue;
  }

  return A;
}
