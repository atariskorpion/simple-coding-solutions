function solution(N) {
  const binaryStr = N.toString(2);

  let zeroCount = 0;
  let result = 0;

  for (let num of binaryStr) {
    if (num === '0') {
      zeroCount += 1;
    } else {
      result = Math.max(result, zeroCount);
      zeroCount = 0;
    }
  }

  return result;
}

console.log(solution(1041));
