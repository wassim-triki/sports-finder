import { Box, Button } from '@mui/material';
import React from 'react';
import useSkipperContext from '../context/skipper-context';

const RegisterForm = ({ children, onSubmit }: any) => {
  const { activeStep, isStepOptional, handleBack, handleSkip, steps } =
    useSkipperContext();
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <div className="grid grid-cols-2 gap-4">{children}</div>
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
