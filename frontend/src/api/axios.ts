import axios from 'axios';
import config from '../config/config';
import { toast } from 'react-toastify';
import toastOptions from '../config/toast-options';
const api = axios.create({
  baseURL: config.apiUrl,
  // timeout: 1000,
});

api.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
api.defaults.headers.post['Content-Type'] = 'application/json';

api.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    alert(error.response.data.message);
    console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    toast.success(response.data.message, toastOptions);
    console.log(response);
    return response;
  },
  (error) => {
    toast.error(error.response.data.message, toastOptions);
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
