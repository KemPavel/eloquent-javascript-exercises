// create World class
function World(map, legend) {
  this.grid = new Grid(map[0].length, map.length);
  this.legend = legend;

  map.forEach(function(line, y) {
    for (let x = 0; x < line.length; x++) {
      this.grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
    }
  }, this)
}

World.prototype.toString = function() {
  let output = '';

  for (let y = 0; y < this.grid.height; y++) {
    for (let x = 0; x < this.grid.width; x++) {
      const element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += '\n';
  }

  return output;
}

World.prototype.turn = function() {
  const acted = [];

  this.grid.iterate(function(critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this)
}

World.prototype.letAct = function(critter, vector) {
  const action = critter.act(new View(this, vector));
  if (action && action.type == 'move') {
    const dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
}

World.prototype.checkDestination = function(action, vector) {
  if (DIRECTIONS.hasOwnProperty(action.direction)) {
    const dest = vector.plus(DIRECTIONS[action.direction]);
    if (this.grid.isInside(dest)) {
      return dest;
    }
  }
}

// create LifelikeWorld class
function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}

LifelikeWorld.prototype = Object.create(World.prototype);

LifelikeWorld.prototype.letAct = function(critter, vector) {
  const action = critter.act(new View(this, vector));
  const handled = action && (action.type in actionTypes) && 
  actionTypes[action.type].call(this, critter, vector, action);

  if(!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0) {
      this.grid.set(vector, null);
    }
  }
}