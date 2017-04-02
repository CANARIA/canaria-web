import { ERROR } from '../constants/application';

export class ValidatorService {
  filter(obj) {
    if (!this._isObject(obj)) {
      return [];
    }

    return Object.entries(obj).map(([key, value]) => {
      if (this[key]) {
        return this[key](value);
      }

      return null;
    });
  }

  email(mailaddress) {
    if (mailaddress.match(/^[^@]+@.+\..+$/)) {
      return this._validResponse();
    }

    return this._invalidResponse(ERROR.VALIDATE.EMAIL);
  }

  userName(userName) {
    const VALID_REGEX = /^[a-zA-Z0-9_.-]+$/;
    const INALID_REGEXS = [
      /^[_.-]*$/,
      /^[_.-].*$/,
      /^.*[_.-]$/,
    ];

    if (userName.match(VALID_REGEX) && INALID_REGEXS.every(regex => !userName.match(regex))) {
      return this._validResponse();
    }

    return this._invalidResponse(ERROR.VALIDATE.USER_NAME);
  }

  password(password) {
    if (!password.match(/^[a-zA-Z0-9_.-]+$/)) {
      return this._invalidResponse(ERROR.VALIDATE.PASSWORD_STRING);
    }

    if (password.split('').length < 8) {
      return this._invalidResponse(ERROR.VALIDATE.PASSWORD_LENGTH);
    }

    return this._validResponse();
  }

  _isObject(val) {
    return toString.call(val).includes('Object');
  }

  _validResponse() {
    return {
      valid: true,
      error: null
    };
  }

  _invalidResponse(errorText) {
    return {
      valid: false,
      error: errorText
    };
  }
}

export default new ValidatorService();
