import api from './axios';

export const registerUser = (user: any) => {
  return api.post('/register', user);
};

export const updateUser = (userData: any) => {
  return api.put('/user', userData);
};
