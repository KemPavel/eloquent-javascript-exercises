function isEven(num) {
  console.log(num);
  if (num === 0) return true;
  if (Math.abs(num) === 1) return false;
  return isEven(Math.abs(num) - 2);
}