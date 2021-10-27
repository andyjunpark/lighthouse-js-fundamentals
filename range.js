function range(start, end, step) {
  // The function takes 3 integer parameters: start, end, and step.
  // The function should return an array of numbers from start to end counting by step.
  let newArr = []
  if (start === undefined || end === undefined || step === undefined) {
    return newArr;
  } else if (start > end || step < 1) {
    return newArr;
  } else {
    for (let i = start; i <= end; i += step) {
      newArr.push(i);
    } return newArr;
  }
}

console.log(range(10,8,2));