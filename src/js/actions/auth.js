// Sign up
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUpRequest = mailaddress => (
  { type: SIGN_UP_REQUEST, payload: mailaddress }
);
export const signUpSuccess = () => (
  { type: SIGN_UP_SUCCESS }
);
export const signUpFailure = err => (
  { type: SIGN_UP_FAILURE, payload: err }
);

// Register
export const RGISTER_TOKEN_VALID = 'RGISTER_TOKEN_VALID';
export const RGISTER_TOKEN_INVALID = 'RGISTER_TOKEN_INVALID';
export const RGISTER_REQUEST = 'RGISTER_REQUEST';
export const RGISTER_SUCCESS = 'RGISTER_SUCCESS';
export const RGISTER_FAILURE = 'RGISTER_FAILURE';

export const registerTokenValid = () => (
  { type: RGISTER_TOKEN_VALID }
);
export const registerTokenInvalid = err => (
  { type: RGISTER_TOKEN_INVALID, payload: err }
);
export const registerRequest = data => (
  { type: RGISTER_REQUEST, payload: data }
);
export const registerSuccess = () => (
  { type: RGISTER_SUCCESS }
);
export const registerFailure = err => (
  { type: RGISTER_FAILURE, payload: err }
);

// Login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = data => (
  { type: LOGIN_REQUEST, payload: data }
);
export const loginSuccess = user => (
  { type: LOGIN_SUCCESS, payload: user }
);
export const loginFailure = err => (
  { type: LOGIN_FAILURE, payload: err }
);
