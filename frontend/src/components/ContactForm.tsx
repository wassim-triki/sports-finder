import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSkipperContext from '../context/skipper-context';
import RegisterForm from '../layouts/RegisterForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../schema/contact-schema';
import InputField from './InputField';
import { Address, IInput } from '../types';
import removeEmpty from '../helpers/removeEmpty';
import { toastPromise } from '../helpers/toast-promise';
import { updateUser } from '../api/user';
import { useUpdateUserMutation } from '../redux/api/userApi';
import { selectCurrentUser } from '../redux/features/authSlice';
import { useAppSelector } from '../redux/store';

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

interface UpdateBody {
  phone?: string;
  address?: Address;
}
export interface UpdateUserRequest {
  userId?: string;
  body: UpdateBody;
}

const ContactForm = () => {
  const { handleNext } = useSkipperContext();

  const user = useAppSelector(selectCurrentUser);

  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (formValues: any) => {
    if (user) {
      const { phone, state, city, street, zipCode } = formValues;
      const updateBody = {
        phone,
        address: {
          state,
          city,
          street,
          zipCode,
        },
      };
      const userData: UpdateUserRequest = {
        userId: user.id,
        body: updateBody,
      };
      userData.userId = user.id;
      const resp = await toastPromise(updateUser(userData).unwrap());
      // handleNext();
    }
  };

  return (
    <RegisterForm onSubmit={onSubmit} inputs={inputs} schema={contactSchema} />
  );
};

export default ContactForm;
