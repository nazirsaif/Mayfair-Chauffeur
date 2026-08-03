import React from 'react';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps, labels }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <React.Fragment key={stepNumber}>
              <div className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-2 transition-colors duration-300 ${
                    isActive ? 'bg-[#c9a769] text-black border-2 border-[#c9a769]' :
                    isCompleted ? 'bg-neutral-800 text-[#c9a769] border-2 border-[#c9a769]' :
                    'bg-neutral-900 text-neutral-500 border-2 border-neutral-700'
                  }`}
                >
                  {isCompleted ? '✓' : stepNumber}
                </div>
                <span className={`text-xs md:text-sm font-medium ${isActive || isCompleted ? 'text-[#f5f5f5]' : 'text-neutral-500'}`}>
                  {labels[index]}
                </span>
              </div>
              {index < totalSteps - 1 && (
                <div className={`flex-grow h-1 mx-2 rounded-full transition-colors duration-300 ${isCompleted ? 'bg-[#c9a769]' : 'bg-neutral-800'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
