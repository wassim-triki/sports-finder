import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastOptions from './config/toast-options';
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer {...toastOptions} />
      <App />
    </Provider>
  </React.StrictMode>
);
