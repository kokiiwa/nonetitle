import React from 'react';
import { StepItem } from './StepItem';
import { setupSteps } from '../../constants/steps';

interface StepListProps {
  activeStep: number;
  completedSteps: number[];
  onStepClick: (stepId: number) => void;
}

export const StepList = ({
  activeStep,
  completedSteps,
  onStepClick,
}: StepListProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {setupSteps.map((step) => (
        <StepItem
          key={step.id}
          step={step}
          isActive={activeStep === step.id}
          isCompleted={completedSteps.includes(step.id)}
          onClick={() => onStepClick(step.id)}
        />
      ))}
    </div>
  );
};