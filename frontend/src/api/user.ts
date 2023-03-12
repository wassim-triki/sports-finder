import api from './axios';

export const registerUser = (user: any) => {
  return api.post('/register', user);
};
