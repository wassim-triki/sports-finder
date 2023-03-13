import { toast } from 'react-toastify';
interface IError {
  status: number;
  data: { message: string };
}
export const toastPromise = (promise: Promise<any>) => {
  return toast.promise(promise, {
    pending: 'Loading',
    success: {
      render({ data }) {
        return `${data.message}`;
      },
    },
    error: {
      render: ({ data: error }) => {
        const err = error as IError;
        return `${err.data.message ?? 'An unknown error occurred'}`;
      },
    },
  });
};
