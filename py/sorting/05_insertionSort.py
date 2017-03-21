def insertionSort(A):

    valueIndex = 0
    value = 0

    for i in range(1, len(A)):
        valueIndex = i
        value = A[i]

        while valueIndex > 0 and A[valueIndex - 1] > value:
          A[valueIndex] = A[valueIndex - 1];
          valueIndex = valueIndex - 1;

        A[valueIndex] = value

    return A
