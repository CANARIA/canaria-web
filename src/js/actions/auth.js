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
export const RGISTER_REQUEST = 'RGISTER_REQUEST';
export const RGISTER_SUCCESS = 'RGISTER_SUCCESS';
export const RGISTER_FAILURE = 'RGISTER_FAILURE';

export const registerRequest = mailaddress => (
  { type: RGISTER_REQUEST, payload: mailaddress }
);
export const registerSuccess = () => (
  { type: RGISTER_SUCCESS }
);
export const registerFailure = err => (
  { type: RGISTER_FAILURE, payload: err }
);
