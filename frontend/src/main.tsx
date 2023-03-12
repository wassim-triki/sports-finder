import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastOptions from './config/toast-options';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer {...toastOptions} />
    <App />
  </React.StrictMode>
);
