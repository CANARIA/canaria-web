import cookie from 'react-cookie';
import { PATH, EXPIRES, SECURE } from '../constants/cookie';

class CookieGateway {
  load(name) {
    return cookie.load(name);
  }

  save(name, val, opt = {}) {
    const date = new Date();
    date.setDate(date.getDate() + EXPIRES);

    const options = Object.assign({
      path: PATH,
      secure: SECURE,
      expires: date,
    }, opt);

    cookie.save(name, val, options);
  }

  remove(name, opt = {}) {
    const options = Object.assign({
      path: PATH,
      secure: SECURE,
    }, opt);

    cookie.remove(name, options);
  }
}

export default new CookieGateway();
