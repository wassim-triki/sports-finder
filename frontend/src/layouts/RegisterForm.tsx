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
}

const RegisterForm = ({ onSubmit, inputs, schema }: Props) => {
  const { activeStep, isStepOptional, handleBack, handleSkip, steps } =
    useSkipperContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    console.log(errors);
  }, [errors]);
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
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
          </Button>
        )}
        <Button type="submit">
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
