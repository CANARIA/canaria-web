// Sign up
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUpRequest = mailaddress => (
  { type: SIGN_UP_REQUEST, payload: mailaddress }
);
export const signUpSuccess = message => (
  { type: SIGN_UP_SUCCESS, payload: message }
);
export const signUpFailure = error => (
  { type: SIGN_UP_FAILURE, payload: error }
);
