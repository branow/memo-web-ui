

class Callback {
  constructor() {
    this.success = new FunctionSequence();
    this.fail = new FunctionSequence();
    this.error = new FunctionSequence();
  }
}

export default Callback;

class FunctionSequence {
  constructor() {
    this.beginning = [];
    this.middle = [];
    this.end = [];
  }
  addAtBeginning(funct) {
    this.beginning.push(funct);
  }
  addAtMiddle(funct) {
    this.middle.push(funct);
  }
  addAtEnd(funct) {
    this.end.push(funct);
  }
  do(params) {
    doArray(this.beginning, params);
    doArray(this.middle, params);
    doArray(this.end, params);
  }
}

function doArray(array, params) {
  for (let i in array) {
    array[i](params);
  }
}


