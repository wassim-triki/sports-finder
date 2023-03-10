import React, { createContext, useContext, useState } from 'react';

const OPT_STEP = 1;
const STEPS = ['Credentials', 'Contact'];

type SkipperContextType = {
  activeStep: number;
  skipped: Set<number>;
  optionalStep: number;
  steps: Array<string>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  setSkipped: React.Dispatch<React.SetStateAction<Set<number>>>;
  isStepOptional: Function;
  isStepSkipped: Function;

  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  handleSkip: () => void;
};

const initialState = {
  activeStep: 0,
  skipped: new Set<number>(),
  optionalStep: 0,
  steps: STEPS,
  setActiveStep: () => {},
  setSkipped: () => {},
  isStepOptional: () => {},
  isStepSkipped: () => {},
  handleNext: () => {},
  handleBack: () => {},
  handleReset: () => {},
  handleSkip: () => {},
};

const SkipperContext = createContext<SkipperContextType>(initialState);

export const SkipperProvider = ({ children }: any) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const optionalStep = OPT_STEP;
  const steps = STEPS;

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <SkipperContext.Provider
      value={{
        activeStep,
        skipped,
        optionalStep,
        steps,
        setActiveStep,
        setSkipped,
        isStepOptional,
        isStepSkipped,
        handleNext,
        handleBack,
        handleReset,
        handleSkip,
      }}
    >
      {children}
    </SkipperContext.Provider>
  );
};

const useSkipperContext = () => useContext(SkipperContext);

export default useSkipperContext;
