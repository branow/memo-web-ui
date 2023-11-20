class MultiValidator {
  constructor(validators) {
    this.validators = validators;
  };

  validate() {
    for (let i in this.validators) {
      const res = this.validators[i].validate();
      if (!res.isValid) {
        return res;
      }
    }
    return new ValidationResult(true);
  };
}


class Validator {
  constructor(name, value, conditions) {
    this.conditions = conditions;
    this.name = name;
    this.value = value;
  };

  validate() {
    for (let i in this.conditions) {
      if (!this.conditions[i].validate(this.value)) {
        return new ValidationResult(false, this.name + " " + this.conditions[i].description);
      }
    }
    return new ValidationResult(true);
  };
}

class ValidationResult {
  constructor(isValid, description) {
    this.isValid = isValid;
    this.description = description;
  }
}


class Condition {
  constructor(validate, description) {
    this.validate = validate;
    this.description = description;
  }
}

export {
  MultiValidator,
  Validator,
  ValidationResult,
  Condition
};

