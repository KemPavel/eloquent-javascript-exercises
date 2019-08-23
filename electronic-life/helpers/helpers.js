// helper functions 
function elementFromChar(legend, ch) {
  if (ch === ' ') {
    return null;
  }
  const element = new legend[ch]();
  element.originChar = ch;
  return element;
}

function charFromElement(element) {
  if (element == null) {
    return ' ';
  }
  else {
    return element.originChar;
  }
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function dirPlus(dir, n) {
  const index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}