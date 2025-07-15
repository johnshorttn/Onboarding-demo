import React, { useState } from 'react';

const OnboardingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    plan: 'standard',
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Customer onboarded:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      {step === 1 && (
        <>
          <h2>Step 1: Company Info</h2>
          <input name="companyName" placeholder="Company Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
        </>
      )}
      {step === 2 && (
        <>
          <h2>Step 2: Choose Plan</h2>
          <select name="plan" onChange={handleChange}>
            <option value="standard">Standard</option>
            <option value="pro">Pro</option>
          </select>
        </>
      )}
      {step === 3 && (
        <>
          <h2>Step 3: Review</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </>
      )}
      <div style={{ marginTop: 10 }}>
        {step > 1 && <button onClick={back}>Back</button>}
        {step < 3 && <button onClick={next}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default OnboardingForm;