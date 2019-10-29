const array = [25, 5, 1, 9, 4, 12, 7, 15, 10, 3, 0]; // 12 calls
// const array = [1, 2, 3];                          // 2 call
// const array = [9, 1, 2, 3, 5, 7];                 // 3 call

function bubbleSorting(arr) {
  let swapped = false;
  const array = [...arr];
  const end = array.length - 1;

  do {
    swapped = false;
    for (let i = 0, next = i + 1; i < end; i++, next++) {
      if (array[i] > array[next]) {
        [array[i], array[next]] = [array[next], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

console.log(bubbleSorting(array));


