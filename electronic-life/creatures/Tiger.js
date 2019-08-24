function Tiger() {
  this.dir = 'e';
  this.energy = 150;
}

Tiger.prototype.act = function(view) {
  const space = view.find(' ');
  if (this.energy > 400 && space) {
    return { type: 'reproduce', direction: space };
  }

  if (this.energy < 400) {
    const animal = view.find('O');
    if (animal) {
      return {type: 'eat', direction: animal};
    }
  }

  return this.move(view);
};

Tiger.prototype.move = function(view) {
  let direction = this.dir;
  while (view.look(this.dir) !== ' ') {
    this.dir = dirPlus(this.dir, Math.round(Math.random() * (4 - -4) + -4));
    if (this.dir === direction) {
      break;
    }
  }
  return { type: 'move', direction: this.dir };
};
