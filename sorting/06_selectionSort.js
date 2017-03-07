function selectionSort (A = []) {

  var tempValueIndex;
  var tempValue;

  for (i = 0; i < A.length; i++) {
    tempValueIndex = i;

    for (j = i+1; j < A.length; j++) {
      if(A[j] < A[tempValueIndex]) {
        tempValueIndex = j;
      }
    }

    tempValue = A[i];
    A[i] = A[tempValueIndex];
    A[tempValueIndex] = tempValue;
  }

  return A;
}
