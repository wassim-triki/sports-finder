import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
export const toastPromise = (promise: Promise<AxiosResponse<any, any>>) => {
  return toast.promise(promise, {
    pending: 'Loading',
    success: {
      render({ data: res }) {
        return `${res?.data.message}`;
      },
    },
    error: {
      render: ({ data }) => {
        if (data instanceof AxiosError) {
          return `${data.response?.data.message}`;
        }
      },
    },
  });
};
