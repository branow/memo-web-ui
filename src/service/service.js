import { ValidationResult, Validator } from "../validator/validator";

function serve(validator, doTask, state, doSuccessArray, doFailArray) {
  const res = validate(validator);
  if (!res.isValid) {
    state.setError(res.description);
    return;
  }
  const success = (response) => {
    state.setError(null);
    callFunctionSequence(doSuccessArray, response);
    state.setPending(false);
  };
  const fail = (response) => {
    state.setError(response);
    callFunctionSequence(doFailArray, response);
    state.setPending(false);
  };
  state.setPending(true);
  doTask(success, fail);
}

function validate(validator) {
  if (validator != null) {
    return validator.validate();
  }
  return new ValidationResult(true);
}

function callFunctionSequence(array, response) {
  for (let i in array) {
    callFunctionIfNotNull(array[i], response);
  }
}

function callFunctionIfNotNull(funct, param) {
  if (funct != null) {
    funct(param);
  }
}

class State {
  constructor(setPending, setError) {
    this.setPending = setPending;
    this.setError = setError;
  }
}

export {serve, State};