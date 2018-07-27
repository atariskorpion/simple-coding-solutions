function selectionSort (A = []) {

  let valueIndex;
  
  for (i = 0; i < A.length; i++) {
    valueIndex = i;

    for (j = i+1; j < A.length; j++) {
      if(A[j] < A[valueIndex]) {
        valueIndex = j;
      }
    }

    A = swap(A, i, valueIndex);
  }

  return A;
}

function swap (A, i, j) {
  let tempValue = A[i];

  A[i] = A[j];
  A[j] = tempValue;

  return A;
}

console.log(selectionSort([17,5,12,2,20,3,7,1,0]));