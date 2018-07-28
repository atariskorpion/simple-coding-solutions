function bubbleSort (A = []) {

  var tempValue;
  var flag = 0;

  for (k = 1; k < A.length; k++) {
    flag = 0;
    for (i = 0; i < A.length - k; i++) {
      if (A[i+1] < A[i]) {
        tempValue = A[i+1];
        A[i+1] = A[i];
        A[i] = tempValue;
        flag += 1;
      }
    }
    if (flag === 0) {
      break;
    }
  }
  return A;
}

export default bubbleSort;