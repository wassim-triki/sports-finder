import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '../layouts/Container';
import CredentialsForm from './CredentialsForm';
import ContactForm from './ContactForm';
import useSkipperContext from '../context/skipper-context';

export default function Register() {
  const {
    activeStep,
    isStepOptional,
    isStepSkipped,
    handleNext,
    handleReset,
    steps,
  } = useSkipperContext();

  return (
    <Container>
      <div className="mx-auto mt-20 sm:max-w-[500px]">
        <Box sx={{ width: '100%', margin: 'auto' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>
              {activeStep === 0 && <CredentialsForm />}
              {activeStep === 1 && <ContactForm />}
            </React.Fragment>
          )}
        </Box>
      </div>
    </Container>
  );
}
