
import React from 'react';
import { Gamepad2, Monitor, Computer } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export interface BuildType {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface BuildTypeSelectorProps {
  useCase: string;
  setUseCase: (value: string) => void;
}

const BuildTypeSelector: React.FC<BuildTypeSelectorProps> = ({ 
  useCase, 
  setUseCase 
}) => {
  const buildTypes: BuildType[] = [
    {
      id: 'gaming',
      title: 'Gaming PC',
      icon: <Gamepad2 className="h-10 w-10 text-mustang-red" />,
      description: 'High-performance gaming rigs with powerful GPUs.'
    },
    {
      id: 'workstation',
      title: 'Workstation',
      icon: <Monitor className="h-10 w-10 text-mustang-red" />,
      description: 'For professional work, content creation, and multitasking.'
    },
    {
      id: 'office',
      title: 'Office/Home PC',
      icon: <Computer className="h-10 w-10 text-mustang-red" />,
      description: 'Budget-friendly systems for everyday computing needs.'
    }
  ];

  return (
    <div className="space-y-3">
      <Label className="text-white">Select Build Type</Label>
      <RadioGroup value={useCase} onValueChange={setUseCase} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {buildTypes.map((type) => (
          <div key={type.id} className={`border rounded-lg p-4 cursor-pointer transition-colors ${
            useCase === type.id ? 'bg-mustang-red/20 border-mustang-red' : 'border-gray-700'
          }`}>
            <RadioGroupItem
              value={type.id}
              id={type.id}
              className="sr-only"
            />
            <Label
              htmlFor={type.id}
              className="flex flex-col items-center cursor-pointer"
            >
              {type.icon}
              <span className="mt-2 font-medium text-white">{type.title}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default BuildTypeSelector;
