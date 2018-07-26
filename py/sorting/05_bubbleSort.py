def bubbleSort(A):
    for k in range(len(A)-1, 0, -1):
        for i in range(k):
            if A[i] > A[i+1]:
                tempValue = A[i]
                A[i] = A[i+1]
                A[i+1] = tempValue

    return A

print(bubbleSort([54,26,93,17,77,31,44,55,20]))

def bubbleSortReverse(A):
    for k in range(len(A)-1, 0, -1):
        for i in range(k):
            if A[i+1] > A[i]:
                tempValue = A[i+1]
                A[i+1] = A[i]
                A[i] = tempValue

    return A

print(bubbleSortReverse([54,26,93,17,77,31,44,55,20]))
