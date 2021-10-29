function merge(array1, array2) {
  //The function should, when given two sorted arrays containing numbers, 
  //returns a sorted array of the numbers from both lists.
  let newArray = []
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  } for (let j = 0; j < array2.length; j++) {
    newArray.push(array2[j]);
  } return newArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);