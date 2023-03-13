import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

const NoAuth = ({ children, redirectPath = '/' }: any) => {
  const { auth } = useAppSelector((state) => state);

  return !auth.token ? children : <Navigate to={redirectPath} replace />;
};

export default NoAuth;
