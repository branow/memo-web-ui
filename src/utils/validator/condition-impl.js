import { Condition } from "./validator";

export {
  getNotNullCondition, 
  getNotBlankStringCondition, 
  getNotEmptyStringCondition, 
  getStringLengthLessEqualsThanCondition,
  getStringMustContainsCondition,
  getAllArrayElementsEqualCondition,
  getStringLengthLongerEqualsThanCondition,
  getNumberInScopeCondition,
};

function getNumberInScopeCondition(min, max) {
  return new Condition((value) => {
    return value >= min && value <= max;
  }, `value must be between [${min}, ${max}]`);
}

function getStringLengthLongerEqualsThanCondition(minLength) {
  return new Condition((value) => {
    if (value != null) {
      return value.length >= minLength;
    }
  }, "length must be longer equal than " + minLength);
}

function getAllArrayElementsEqualCondition() {
  return new Condition((array) => {
    if (array != null && array.length > 0) {
      return array.every(v => v === array[0]);
    }
  }, "must be equal");
}

function getNotNullCondition() {
  return new Condition((value) => {
    return value !== null;
  }, "must not be null");
}

function getNotEmptyStringCondition() {
  return new Condition((value) => {
    if (value != null) {
      return value.length !== 0;
    }
  }, "must not be empty");
}

function getNotBlankStringCondition() {
  return new Condition((value) => {
    if (value != null) {
      return value.trim().length !== 0;
    }
  }, "must not be blank");
}

function getStringLengthLessEqualsThanCondition(maxLength) {
  return new Condition((value) => {
    if (value != null) {
      return value.length <= maxLength;
    }
  }, "length must be less equals than " + maxLength);
}

function getStringMustContainsCondition(substring) {
  return new Condition((value) => {
    if (value != null) {
      return value.includes(substring);
    }
  }, "must contains " + substring);
}


