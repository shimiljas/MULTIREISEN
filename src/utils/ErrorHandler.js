import { toast } from './ToastMessage';
import errors from '../constants/errors';

class ErrorHandler {
  static errorIterator = error => {
    let message = 'Something went wrong.';
    let errorObject = error;
    if (error && error.response && error.response.data) {
      errorObject = error.response.data;
    } else if (error && error.data) {
      errorObject = error.data;
    }
    // Assigned Error Object. Start Checking for error messages
    if (errorObject) {
      if (errorObject.message) {
        // eslint-disable-next-line prefer-destructuring
        message = errorObject.message;
      } else if (errorObject.data) {
        message = errorObject.data;
      }
    }
    return message;
  };

  static clearErrorMessage = message => {
    let validatedMessage = null;
    switch (message) {
      case 'INVALID_OTP': {
        validatedMessage = 'OTP entered is invalid';
        break;
      }
      case 'OTP_EXPIRED': {
        validatedMessage = 'OTP expired.';
        break;
      }
      case errors.validation.EMAIL: {
        validatedMessage = 'Email entered is invalid';
        break;
      }
      case errors.validation.NAME: {
        validatedMessage = 'Name entered has non string variables';
        break;
      }
      case errors.validation.PASSWORD: {
        validatedMessage = 'Password is not strong';
        break;
      }
      case errors.validation.PHONE: {
        validatedMessage = 'Phone number is not valid';
        break;
      }
      case errors.validation.ZIP_CODE: {
        validatedMessage = 'Incorrect zip code format';
        break;
      }
      case errors.validation.ADDRESS: {
        validatedMessage = 'Address contains non string';
        break;
      }
      case errors.network.invalid: {
        validatedMessage = 'You are not authorized to perform this';
        break;
      }
      case errors.network.request: {
        validatedMessage = 'Invalid Request';
        break;
      }
      case errors.network.timeOut: {
        validatedMessage = 'Cannot reach our Servers';
        break;
      }
      case errors.network.invalid_accessToken: {
        validatedMessage = 'Please login again';
        break;
      }
      default: {
        validatedMessage = message;
        break;
      }
    }
    return validatedMessage;
  };

  static handleInternalErrors = (message, file, error) => {
    this.logErrors(errors.internal, { message, error, file });
  };

  static handleNetworkErrors = error => {
    toast({
      text: this.clearErrorMessage(this.errorIterator(error)),
      type: 'danger',
    });
    this.logErrors(errors.network.request, {
      message: 'Invalid Request',
      error,
      file: 'ErrorHandler',
    });
  };

  static logErrors = (code, error) => {
    console.log('ERROR', error);
    //this.crashlytics.recordError(code, JSON.stringify(error));
  };
}

export default ErrorHandler;
