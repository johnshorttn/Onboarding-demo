import React from 'react';
import OnboardingForm from './components/OnboardingForm';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Customer Onboarding Demo</h1>
      <OnboardingForm />
    </div>
  );
};

export default App;