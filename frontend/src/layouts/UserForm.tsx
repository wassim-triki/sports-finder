import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../components/InputField';
import useSkipperContext from '../context/skipper-context';
import { IInput } from '../types';

interface Props {
  onSubmit: any;
  inputs: IInput[];
  schema: any;
  children: any;
}

const UserForm = ({ children, onSubmit, inputs, schema }: Props) => {
  const { activeStep, isStepOptional, handleBack, handleSkip, steps } =
    useSkipperContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="grid grid-cols-2 gap-4">
        {inputs.map((input, idx) => (
          <InputField
            key={input.name}
            {...input}
            register={register}
            error={errors[input.name]}
          />
        ))}
      </div>
      {children}
    </form>
  );
};

export default UserForm;
