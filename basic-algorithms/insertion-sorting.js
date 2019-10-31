const array = [25, 5, 1, 9, 4, 12, 7, 15, 10, 3, 0];
// const array = [1, 2, 3];
// const array = [9, 1, 2, 3, 5, 7];
// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSorting(arr) {
  const array = [...arr];

  for(let i = 1; i < array.length; i++) {
    let j = i - 1;
    let current = array[i];

    while (j >= 0 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

console.log(insertionSorting(array));