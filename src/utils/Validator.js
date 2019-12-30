import Regex from './Regex';
import {toast} from './ToastMessage';
import ErrorHandler from './ErrorHandler';
import errors from '../constants/errors';

class Validator {
  static validateDataArray = data =>
    data.filter(element => element !== undefined);

  static emailValidation = email =>
    new Promise((resolve, reject) => {
      if (Regex.validateEmail(email)) {
        resolve();
      } else {
        this.showAlert(errors.validation.EMAIL);
        reject();
      }
    });

  static passwordValidation = password =>
    new Promise((resolve, reject) => {
      if (Regex.validatePassword(password)) {
        resolve();
      } else {
        this.showAlert(errors.validation.PASSWORD);
        reject();
      }
    });

  static stringValidation = value =>
    new Promise((resolve, reject) => {
      if (Regex.validateString(value)) {
        resolve();
      } else {
        this.showAlert(errors.validation.NAME);
        reject();
      }
    });

  static phoneValidation = phone =>
    new Promise((resolve, reject) => {
      if (Regex.validateMobile(phone)) {
        resolve();
      } else {
        this.showAlert(errors.validation.PHONE);
        reject();
      }
    });

  static generalInfoValidation = (name, zipCode, address) =>
    new Promise((resolve, reject) => {
      let errorObject = null;
      if (name && name.length > 1) {
        if (!Regex.validateString(name)) {
          errorObject = errors.validation.NAME;
        }
      }
      if (zipCode && zipCode.length > 1) {
        if (!Regex.validateNumbers(zipCode)) {
          errorObject = errors.validation.ZIP_CODE;
        }
      }
      if (address && address.length > 1) {
        // if (!Regex.validateString(address)) {
        //   errorObject = errors.validation.ADDRESS;
        // }
      }
      if (errorObject) {
        this.showAlert(errorObject);
        reject();
      } else {
        resolve();
      }
    });

  static showAlert = error => {
    toast({
      text: ErrorHandler.clearErrorMessage(error),
      type: 'danger',
    });
  };
}

export default Validator;
