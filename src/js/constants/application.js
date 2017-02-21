const isProduction = process.env.NODE_ENV === 'production';

export const URL_ROOT = isProduction ? 'https://canaria.io' : 'http://localhost:5000';
export const API_ROOT = `${URL_ROOT}/api/v1`;

export const TIMEOUT = 10000;
export const ERROR = {
  TIMEOUT: 'タイムアウトエラーが発生しました。',
  CONNECTION: '通信エラーが発生しました。',
  PASSWORD_CONFIRM: 'パスワードが一致していません。'
};
