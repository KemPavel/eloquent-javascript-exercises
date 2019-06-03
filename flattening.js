function flattenArray(array) { 
    return array.reduce(function(arr, current) {
      return arr.concat(current);
    });
  }