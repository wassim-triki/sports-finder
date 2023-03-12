import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSkipperContext from '../context/skipper-context';
import RegisterForm from '../layouts/RegisterForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../schema/contact-schema';
import InputField from './InputField';

const inputs = [
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: 'Enter your phone',
  },
  {
    name: 'state',
    label: 'State',
    type: 'text',
    placeholder: 'Enter your state',
  },
  {
    name: 'zipCode',
    label: 'Zip code',
    type: 'text',
    placeholder: 'Enter your zip code',
  },
  {
    name: 'city',
    label: 'City',
    type: 'text',
    placeholder: 'Enter your city',
  },
  {
    name: 'street',
    label: 'Street',
    type: 'text',
    placeholder: 'Enter your street',
  },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const submitForm = (formValues: any) => {
    console.log(formValues);
  };

  return (
    <RegisterForm onSubmit={handleSubmit(submitForm)}>
      {inputs.map((input, idx) => (
        <InputField
          key={input.name}
          {...input}
          register={register}
          error={errors[input.name]}
        />
      ))}
    </RegisterForm>
  );
};

export default ContactForm;
