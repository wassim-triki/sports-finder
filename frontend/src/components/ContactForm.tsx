import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSkipperContext from '../context/skipper-context';
import RegisterForm from '../layouts/RegisterForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../schema/contact-schema';
import InputField from './InputField';
import { IInput } from '../types';

const inputs: IInput[] = [
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
  const { handleNext } = useSkipperContext();

  const onSubmit = (formValues: any) => {
    console.log(formValues);
    handleNext();
  };

  return (
    <RegisterForm onSubmit={onSubmit} inputs={inputs} schema={contactSchema} />
  );
};

export default ContactForm;
