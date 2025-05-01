
import React from 'react';

const BuildProcess: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Request a Quote',
      description: 'Fill out the form with your requirements and budget'
    },
    {
      number: 2,
      title: 'Consultation',
      description: 'Our technicians will discuss options and recommendations'
    },
    {
      number: 3,
      title: 'Build & Test',
      description: 'We assemble your PC with care and test everything'
    },
    {
      number: 4,
      title: 'Delivery',
      description: 'Your new PC is delivered to your door, ready to use'
    }
  ];

  return (
    <div className="bg-mustang-gray rounded-lg p-8 mb-8">
      <h2 className="text-xl font-bold text-white mb-6">Our Build Process</h2>
      
      <div className="space-y-6">
        {steps.map(step => (
          <div className="flex" key={step.number}>
            <div className="bg-mustang-dark rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
              <span className="text-mustang-red font-bold">{step.number}</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildProcess;
