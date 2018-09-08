function countBs(str, letter) {
  const reg = new RegExp(letter, 'ig');
  const result = str.match(reg);
  return result.length;
}
