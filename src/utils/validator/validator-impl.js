import { Validator } from "./validator";
import { getAllArrayElementsEqualCondition, getNotBlankStringCondition, getNotEmptyStringCondition, getStringLengthLessEqualsThanCondition, getStringLengthLongerEqualsThanCondition, getStringMustContainsCondition } from "./condition-impl";

export {
  getUsernameValidator,
  getEmailValidator,
  getPasswordsEqualValidator,
  getPasswordValidator,
  getModuleNameValidator,
  getCollectionNameValidator,
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

function getModuleNameValidator(value) {
  return new Validator('Name of the module', value, [
    getNotEmptyStringCondition(), 
    getNotBlankStringCondition(), 
    getStringLengthLessEqualsThanCondition(100),
  ]);
}

function getCollectionNameValidator(value) {
  return new Validator('Name of the collection', value, [
    getNotEmptyStringCondition(), 
    getNotBlankStringCondition(), 
    getStringLengthLessEqualsThanCondition(100),
  ]);
}
