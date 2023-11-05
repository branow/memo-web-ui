import { Validator } from "./validator";
import { getAllArrayElementsEqualCondition, getNotBlankStringCondition, getNotEmptyStringCondition, getStringLengthLessEqualsThanCondition, getStringLengthLongerEqualsThanCondition, getStringMustContainsCondition } from "./condition-impl";

export {
  getUsernameValidator,
  getEmailValidator,
  getPasswordsEqualValidator,
  getPasswordValidator,
};

function getPasswordValidator(value) {
  return new Validator('passowrd', value, [
    getStringLengthLongerEqualsThanCondition(8),
    getNotBlankStringCondition(),
    getStringLengthLessEqualsThanCondition(20),
  ]);
}

function getPasswordsEqualValidator(value) {
  return new Validator('passowrds', value, [
    getAllArrayElementsEqualCondition()
  ]);
}

function getUsernameValidator(value) {
  return new Validator('username', value, [
    getNotEmptyStringCondition(),
    getNotBlankStringCondition(), 
    getStringLengthLessEqualsThanCondition(50),
  ]);
}

function getEmailValidator(value) {
  return new Validator('email', value, [
    getNotEmptyStringCondition(), 
    getNotBlankStringCondition(), 
    getStringMustContainsCondition('@'),
    getStringLengthLessEqualsThanCondition(320),
  ]);
}



