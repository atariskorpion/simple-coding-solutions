function fillArrayWithNumbers(n, num) {
    var arr = Array.apply(null, Array(n));
    return arr.map(function () { return num });
}

function solution(N, A) {
    let counters = fillArrayWithNumbers(N, 0);
    let maxValue = 0;

    for (const item of A) {
        if (item === N + 1) {
            counters = fillArrayWithNumbers(N, maxValue);
        } else {
            counters[item - 1] += 1;
            if (counters[item - 1] > maxValue) {
                maxValue = counters[item - 1];
            }
        }
    }

    return counters;
}

function solution2(N, A) {
    let counters = fillArrayWithNumbers(N, 0);
    let max = 0;
    let lastMax = 0;

    for (const item of A) {
        if (item >= 1 && item <= N) {
            counters[item - 1] = Math.max(counters[item - 1], lastMax);
            counters[item - 1] += 1;
            max = Math.max(max, counters[item - 1]);
        } else if (item === N + 1) {
           lastMax = max;
        }
    }

    for (const index in counters) {
        counters[index] = Math.max(counters[index], lastMax);
    }

    return counters;
}
console.log(solution2(5, [3,4,4,6,1,4,4]));
