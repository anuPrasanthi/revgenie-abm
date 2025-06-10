'use client';

import React from 'react';

type Props = {
  currentStep: number;
  totalSteps?: number;
};

export const ProgressStepper = ({ currentStep, totalSteps = 6 }: Props) => {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-6 rounded-full ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};
