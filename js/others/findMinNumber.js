const solution = (N = []) => {

  if (N.length === 0) {
    throw new Error('No data found.');
  }

  let smallestNumber = N[0];

  for (let number of N) {
    if (smallestNumber > number) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
}

console.log(solution([5,4,3,2,1,0]));
console.log(solution([0,4,3,2,1,5]));
