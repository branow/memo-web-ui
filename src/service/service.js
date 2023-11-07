
import { ValidationResult, Validator } from "../validator/validator";

function serve(validator, doTask, state, doFinally) {
  const res = validate(validator);
  if (!res.isValid) {
    state.setError(res.description);
    return;
  }

  doFinally.success.addBefore(() => state.setError(null));
  doFinally.fail.addBefore((response) => state.setError(response));
  doFinally.error.addBefore((error) => state.setError(error.message));

  doFinally.success.addAfter(() => state.setPending(false));
  doFinally.fail.addAfter(() => state.setPending(false));
  doFinally.error.addAfter(() => state.setPending(false));

  state.setPending(true);
  doTask(doFinally);
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