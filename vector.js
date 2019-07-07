function Vector(x, y) {
  this.x = x;
  this.y = y;
};
Vector.prototype.plus = function(vector) { 
  return {
    x: this.x + vector.x,
    y: this.y + vector.y
  };
};

Vector.prototype.minus = function(vector) { 
  return {
    x: this.x - vector.x,
    y: this.y - vector.y
  };
};

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});