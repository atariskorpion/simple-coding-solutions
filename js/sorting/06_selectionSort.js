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

const testArr = [7,3,9,1,2,10,4];
console.log(selectionSort(testArr));
