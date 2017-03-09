def selectionSort(A):
    valueIndex = 0
    tempValue = 0

    for i in range(0, len(A)):
        valueIndex = i

        for j in range(i+1, len(A)):
            if A[j] < A[valueIndex]:
                valueIndex = j

        tempValue = A[i];
        A[i] = A[valueIndex];
        A[valueIndex] = tempValue;

    return A
