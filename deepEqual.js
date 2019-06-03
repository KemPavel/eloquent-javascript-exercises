function deepEqual(obj1, obj2) {
  if (isObject(obj1) && isObject(obj2)) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }

    return obj1Keys.every(key => deepEqual(obj1[key], obj2[key]));

  } else {
    return obj1 === obj2;
  }
} 

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}