import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSkipperContext from '../context/skipper-context';
import RegisterForm from '../layouts/RegisterForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { credentialsSchema } from '../schema/credentials-schema';
import InputField from './InputField';
import { IInput } from '../types';
const inputs: IInput[] = [
  {
    name: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Enter your first name',
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    placeholder: 'Enter your last name',
  },
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
  {
    name: 'repeatPassword',
    label: 'Repeat password',
    type: 'password',
    placeholder: 'Repeat your password',
  },
];

const CredentialsForm = () => {
  const { handleNext } = useSkipperContext();

  const onSubmit = (formValues: any) => {
    console.log(formValues);
    handleNext();
  };

  return (
    <RegisterForm
      onSubmit={onSubmit}
      inputs={inputs}
      schema={credentialsSchema}
    />
  );
};

export default CredentialsForm;
