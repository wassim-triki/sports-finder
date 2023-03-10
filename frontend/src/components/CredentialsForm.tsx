import { Button } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSkipperContext from '../context/skipper-context';
import RegisterForm from '../layouts/RegisterForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { credentialsSchema } from '../schema/credentials-schema';
import InputField from './InputField';
const inputs = [
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

interface Props {
  handleSubmitCredentials: SubmitHandler<any>;
}

const CredentialsForm = ({ handleSubmitCredentials }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(credentialsSchema) });
  const { activeStep, handleNext, steps } = useSkipperContext();
  const submitForm = (formValues: any) => {
    console.log(formValues);
    handleNext();
  };
  return (
    <RegisterForm onSubmit={handleSubmit(submitForm)}>
      {inputs.map((input, idx) => (
        <InputField
          key={input.name}
          {...input}
          register={register}
          errors={errors}
          fullWidth={idx > 1}
        />
      ))}
      {/* {errors.email && errors.email.message} */}
    </RegisterForm>
  );
};

export default CredentialsForm;
