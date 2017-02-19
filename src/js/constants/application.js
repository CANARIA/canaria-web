const isProduction = process.env.NODE_ENV === 'production';

export const URL_ROOT = isProduction ? 'https://canaria.io' : 'http://localhost:5000';
export const API_ROOT = `${URL_ROOT}/api/v1`;