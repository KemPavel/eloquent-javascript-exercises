 // create a plantEacter creature
 function PlantEater() {
  this.energy = 20;
  this.foodCounter = 0;
}

PlantEater.prototype.act = function(view) {
  const space = view.find(' ');
  // document.write('energy: ', this.energy, ' counter: ', this.foodCounter, '<br />');
  if (this.energy > 60 && space) {
    this.foodCounter += 1;
    return { type: 'reproduce', direction: space };
  }
  if (this.foodCounter > 5) {
    const plant = view.find('*');
    if (plant) {
      this.foodCounter = 0;
      return {type: 'eat', direction: plant };
    }
  }
  if (space) {
    this.foodCounter += 1;
    return { type: 'move', direction: space };
  }
}



    // create a SmartPlantEater class
    function SmartPlantEater() {
      this.energy = 20;
    }

    SmartPlantEater.prototype.act = function(view) {
      const space = view.find(' ');
      // document.write('energy: ', this.energy, '<br />');
      if (this.energy > 100 && space) {
        return { type: 'reproduce', direction: space };
      }
      const plant = view.find('*');
      if (plant && this.energy < 20) {
        return { type: 'eat', direction: plant };
      } else if (plant && this.energy < 120) {
        return { type: 'nosh', direction: plant }; 
      }
      if (space) {
        return { type: 'move', direction: space };
      }
    }