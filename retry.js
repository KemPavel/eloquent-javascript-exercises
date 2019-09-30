function MultiplicatorUnitFailure(message) {
    this.message = message;
    this.stack = (new Error()).stack;
  }
  MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

  function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
      return a * b;
    } else {
      throw new MultiplicatorUnitFailure('faillure');
    }
  }


  function reliableMultiply(a, b) {
    for (;;) {
      try {
        return primitiveMultiply(a, b);
      } catch (error) {
        if (!(error instanceof MultiplicatorUnitFailure)) {
          console.log('error: ', error);
        }
      }
    }
  }
  console.log(reliableMultiply(8, 8));