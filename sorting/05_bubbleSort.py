def bubbleSort(A):

    tempValue = 0;

    for k in range(1, len(A)):
        flag = 0
        for i in range(0, len(A) - k):
            if A[i+1] < A[i]:
                tempValue = A[i+1]
                A[i+1] = A[i]
                A[i] = tempValue
                flag += 1

        if flag == 0:
          break

    return A
