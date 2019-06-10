function some(arr, func) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      result = true;
      break;
    }
  }
  return result;
}