import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { toastPromise } from '../helpers/toast-promise';
import UserForm from '../layouts/UserForm';
import { loginSchema } from '../schema/login-schema';
import { IInput } from '../types';
import { useLoginUserMutation } from '../redux/api/authApi';
import { useAppSelector } from '../redux/store';
const inputs: IInput[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
];
const LoginForm = () => {
  const [loginUser] = useLoginUserMutation();

  const onSubmit = async (formValues: any) => {
    const credentials = {
      username: formValues.email,
      password: formValues.password,
    };
    await toastPromise(loginUser(credentials).unwrap());
  };

  return (
    <Container>
      <div className="mx-auto mt-20 sm:max-w-[500px]">
        <h3 className="text-5xl mb-10 text-center font-medium">Login</h3>
        <UserForm onSubmit={onSubmit} inputs={inputs} schema={loginSchema}>
          <Button
            variant="outlined"
            sx={{
              py: 1,
              mt: 2,
            }}
            type="submit"
          >
            Login
          </Button>
        </UserForm>
      </div>
    </Container>
  );
};

export default LoginForm;
