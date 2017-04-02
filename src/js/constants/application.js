const isProduction = process.env.NODE_ENV === 'production';

export const FQDN = isProduction ? 'https://canaria.io' : 'http://localhost:5000';
export const API_ROOT = `${FQDN}/api/v1`;

export const PATH = {
  FEED: '',
  RANKING: 'ranking',
  SIGNUP: 'signup',
  REGISTER: 'register',
  LOGIN: 'login'
};

export const TIMEOUT = 5000;
export const ERROR = {
  CONNECTION: '通信エラーが発生しました。',
  VALIDATE: {
    EMAIL: 'メールアドレスを正しい形式で入力してください。',
    USER_NAME: 'ユーザー名を正しい形式で入力してください(使用できる文字は半角英数字と一部の記号(-._)のみです)。',
    PASSWORD_STRING: 'パスワードを正しい形式で入力してください(使用できる文字は半角英数字と一部の記号(-._)のみです)。',
    PASSWORD_LENGTH: 'パスワードは8文字以上で入力してください。',
    PASSWORD_CONFIRM: 'パスワードが一致していません。'
  }
};
