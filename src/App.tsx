import React from 'react';
import { Header } from './components/Header';
import { StepList } from './components/StepList';
import { Video } from './components/Video';
import { useStepProgress } from './hooks/useStepProgress';

function App() {
  const { activeStep, completedSteps, handleStepClick } = useStepProgress();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 hover:text-indigo-600 transition-colors duration-200">
              設定の流れ
            </h2>
            <StepList
              activeStep={activeStep}
              completedSteps={completedSteps}
              onStepClick={handleStepClick}
            />
          </div>
          <div className="lg:col-span-9">
            <Video />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;