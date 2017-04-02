export const GET_POSTERS = 'GET_POSTERS';

export const getPosters = posters => (
  { type: GET_POSTERS, payload: posters }
);
