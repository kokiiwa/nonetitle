import React from 'react';
import type { Step } from '../../types/step';

interface StepContentProps {
  step: Step;
}

export const StepContent = ({ step }: StepContentProps) => {
  return (
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        {step.id}. {step.title}
      </h3>
    </div>
  );
};