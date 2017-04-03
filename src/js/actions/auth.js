// auth common
export const AUTH_INITIALIZE = 'AUTH_INITIALIZE';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authInitialize = () => (
  { type: AUTH_INITIALIZE }
);
export const authRequest = () => (
  { type: AUTH_REQUEST }
);
export const authSuccess = () => (
  { type: AUTH_SUCCESS }
);
export const authFailure = err => (
  { type: AUTH_FAILURE, payload: err }
);

// Register
export const RGISTER_TOKEN_VALID = 'RGISTER_TOKEN_VALID';
export const RGISTER_TOKEN_INVALID = 'RGISTER_TOKEN_INVALID';

export const registerTokenValid = () => (
  { type: RGISTER_TOKEN_VALID }
);
export const registerTokenInvalid = err => (
  { type: RGISTER_TOKEN_INVALID, payload: err }
);

// Login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = data => (
  { type: LOGIN_SUCCESS, payload: data }
);

// Logout
export const LOGOUT = 'LOGOUT';

export const logout = () => (
  { type: LOGOUT }
);
