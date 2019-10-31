const array = [25, 5, 1, 9, 4, 12, 7, 15, 10, 3, 0];
// const array = [1, 2, 3];
// const array = [9, 1, 2, 3, 5, 7];

function bubbleSorting(arr) {
  let swapped = false;
  const array = [...arr];
  const end = array.length - 1;

  // OPTIMIZED APPROACH
  do {
    swapped = false;
    for (let i = 0, next = i + 1; i < end; i++, next++) {
      if (array[i] > array[next]) {
        [array[i], array[next]] = [array[next], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  // BASIC APPROACH
  // for(let i = 0; i < array.length; i++) {
  //   for(let j = 0; j < array.length; j++) {
  //     if(array[j] > array[j+1]) {
  //       const nextValue = array[j+1];
  //       array[j+1] = array[j];
  //       array[j] = nextValue;
  //     }
  //   }
  // }

  return array;
}

console.log(bubbleSorting(array));


