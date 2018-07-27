function mergeSort (A = []) {
  if (A.length <= 1) {
    return A;
  }

  let mid = Math.floor(A.length / 2);

  let L = [];
  for(let l = 0; l < mid; l++) {
    L[l] = A[l];
  }

  let R = [];
	for(let m = mid; m < A.length; m++) {
    R[m - mid] = A[m];
  }

  L = mergeSort(L);
  R = mergeSort(R);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < L.length && j < R.length) {
    if (L[i] < R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < L.length) {
    A[k] = L[i];
    i++;
    k++;
  }

  while (j < R.length) {
    A[k] = R[j];
    j++;
    k++;
  }

  return A;
}

console.log(mergeSort([17,5,12,2,20,3,7,1,0]));