//Symbol.iterator solution
function ArraySeq(range) {
  this.from = range[0] || 0;
  this.to = range[range.length - 1] || 0;

  this[Symbol.iterator] = function() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++
          };
        } else {
          return {
            done: true
          };
        }
      }
    }
  }
}

function RangeSeq(from, to) {
  ArraySeq.call(this, [from, to]);
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);

function logFive(obj) {
  let counter = 0;
  const max = 5;
  for (const num of obj) {
    if (counter >= max) break;
    counter++;
    console.log(num);

  }
}

logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1 2 3 4 5
logFive(new ArraySeq([1, 2])); // 1 2
logFive(new RangeSeq(100, 1000)); // 100 101 102 103 104


// basic solution
/*
function ArraySeq(range) {
  this.position = 0;
  this.range = range;
}

ArraySeq.prototype.current = function() {
  this.position = 0;
  return this.position;
}

ArraySeq.prototype.isNext = function() {
  return this.range.length > this.position++;
}

function RangeSeq(from, to) {
  this.position = from;
  this.range = [];
  for (let i = from; i <= to; i++) {
    this.range.push(i);
  }
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);

function logFive(seq) {
  const max = 5;

  for(let i = 0; seq.isNext() && i < 5; i++) {
    console.log(seq.range[i]);
  }
}

logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1 2 3 4 5
logFive(new ArraySeq([1, 2])); // 1 2
logFive(new RangeSeq(100, 1000)); // 100 101 102 103 104
*/