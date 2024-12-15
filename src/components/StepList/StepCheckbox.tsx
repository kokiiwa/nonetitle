import React from 'react';
import { CheckCircle } from 'lucide-react';

interface StepCheckboxProps {
  isCompleted: boolean;
  onClick: () => void;
}

export const StepCheckbox = ({ isCompleted, onClick }: StepCheckboxProps) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`rounded-full p-2 cursor-pointer transition-colors ${
        isCompleted ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
      }`}
    >
      <CheckCircle className="w-5 h-5" />
    </div>
  );
};