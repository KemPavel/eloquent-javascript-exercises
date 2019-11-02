const array = [25, 5, 1, 9, 4, 12, 7, 15, 10, 3, 0];
// const array = [1, 2, 3];
// const array = [9, 1, 2, 3, 5, 7];
// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function mergeSorting(arr) {
  if (!arr || !arr.length) {
    return null;
  }
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, middle);
  const rightPart = arr.slice(middle);

  return mergeArrays(mergeSorting(leftPart), mergeSorting(rightPart));
}

function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while(i < arr1.length && j < arr2.length) {
    (arr1[i] < arr2[j]) ? result.push(arr1[i++]) : result.push(arr2[j++]);
  }

  return [
    ...result,
    ...arr1.slice(i),
    ...arr2.slice(j)
  ];
}

console.log(mergeSorting(array));