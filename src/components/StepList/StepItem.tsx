import React from 'react';
import { StepContent } from './StepContent';
import { CheckCircle } from 'lucide-react';
import type { Step } from '../../types/step';

interface StepItemProps {
  step: Step;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export const StepItem = ({
  step,
  isActive,
  isCompleted,
  onClick,
}: StepItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`group p-4 rounded-lg mb-3 cursor-pointer transition-all duration-200 
        transform hover:scale-[1.02] hover:shadow-md
        ${
          isActive
            ? 'bg-indigo-50 border-2 border-indigo-500'
            : 'bg-white border border-gray-200 hover:border-indigo-300'
        }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`rounded-full p-2 transition-all duration-200 
            ${
              isCompleted 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
            }`}
        >
          <CheckCircle className="w-5 h-5" />
        </div>
        <StepContent step={step} />
      </div>
    </div>
  );
};