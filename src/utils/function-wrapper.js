
class CallbackFunctionWrapper {
  constructor(funct, callback) {
    this.func = funct;
    this.callback = callback;
  }
  wrap() {
    return () => {
      try {
        const result = this.func();
        this.callback.success.do(result);
      } catch (error) {
        this.callback.error.do(error);
      }
    }
  }
}


class ValidatorFunctionWrapper {
  constructor(funct, validator) {
    this.func = funct;
    this.validator = validator;
  }
  wrap() {
    return () => {
      const res = this.validator.validate();
      if (res.isValid) {
        this.func();
      } else {
        throw new Error(res.description);
      }
    }
  }
}

export { ValidatorFunctionWrapper, CallbackFunctionWrapper };
