function PlantEater() {
  this.dir = randomElement(Object.keys(DIRECTIONS));
  this.energy = 20;
  this.foodCounter = 0;
}

PlantEater.prototype.act = function(view) {
  const space = view.find(' ');
  if (this.energy > 60 && space) {
    this.foodCounter += 1;
    return { type: 'reproduce', direction: space };
  }
  if (this.foodCounter > 0) {
    const plant = view.find('*');
    if (plant) {
      this.foodCounter = 0;
      return { type: 'eat', direction: plant };
    }
  }
  return this.move(view);
};

PlantEater.prototype.move = function(view) {
  let direction = this.dir;
  this.foodCounter += 1;

  while (view.look(this.dir) !== ' ') {
    this.dir = dirPlus(this.dir, (Math.random() < 0.5) ? -3 : 3);
    if (this.dir === direction) {
      break;
    }
  }
  return { type: 'move', direction: this.dir };
};
