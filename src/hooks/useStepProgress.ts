import { useState } from 'react';

export const useStepProgress = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    toggleStepComplete(stepId);
  };

  const toggleStepComplete = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  return {
    activeStep,
    completedSteps,
    handleStepClick,
    toggleStepComplete,
  };
};