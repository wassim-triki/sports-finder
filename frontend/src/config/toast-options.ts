import { ToastOptions } from 'react-toastify';
const toastOptions: ToastOptions<{}> = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  rtl: false,
  pauseOnFocusLoss: true,
};

export default toastOptions;
