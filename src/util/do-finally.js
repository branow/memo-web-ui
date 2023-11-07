

class DoFinally {
  constructor() {
    this.success = new DoFinallySequence();
    this.fail = new DoFinallySequence();
    this.error = new DoFinallySequence();
  }
}


class DoFinallySequence {
  constructor() {
    this.functs = [];
  }
  addBefore(funct) {
    this.functs.unshift(funct);
  }
  addAfter(funct) {
    this.functs.push(funct);
  }
  do(params) {
    for (let i in this.functs) {
      this.functs[i](params);
    }
  }
}

export default DoFinally;
