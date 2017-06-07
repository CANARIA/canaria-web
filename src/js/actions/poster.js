export const FETCH_POSTERS = 'FETCH_POSTERS';

export const fetchPosters = posters => (
  { type: FETCH_POSTERS, payload: posters }
);
