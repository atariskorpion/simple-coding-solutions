const insertionSort = (A = []) => {

  let valueIndex;
  let value;

  for (let j = 1; j < A.length; j++) {
    value = A[j];
    valueIndex = j;

    while (valueIndex > 0 && A[valueIndex - 1] > value) {
      A[valueIndex] = A[valueIndex - 1];
      valueIndex = valueIndex - 1;
    }

    A[valueIndex] = value;
  }

  return A;
}

console.log(insertionSort([17,5,12,2,20,3,7,1,0]));
