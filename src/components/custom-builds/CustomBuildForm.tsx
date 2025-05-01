
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { useWhatsApp } from '@/context/WhatsAppContext';
import BuildTypeSelector from './BuildTypeSelector';

interface CustomBuildFormProps {
  onSubmit?: () => void;
}

const CustomBuildForm: React.FC<CustomBuildFormProps> = ({ onSubmit }) => {
  const { sendWhatsAppMessage } = useWhatsApp();
  const [useCase, setUseCase] = useState('gaming');
  const [budget, setBudget] = useState([5000]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirements, setRequirements] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
Hello, I'd like a custom PC build quote:

Use Case: ${useCase.charAt(0).toUpperCase() + useCase.slice(1)}
Budget: ${budget[0]} MAD
Requirements: ${requirements || 'None specified'}

My Name: ${name}
Phone: ${phone}
    `.trim();
    
    sendWhatsAppMessage(message);

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="bg-mustang-gray rounded-lg p-8">
      <h2 className="text-xl font-bold text-white mb-6">Request a Custom Build</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Build Type */}
        <BuildTypeSelector useCase={useCase} setUseCase={setUseCase} />
        
        {/* Budget Slider */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-white">Budget (MAD)</Label>
            <span className="text-mustang-red font-semibold">{budget[0]} MAD</span>
          </div>
          <Slider
            min={2000}
            max={20000}
            step={1000}
            value={budget}
            onValueChange={setBudget}
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>2,000 MAD</span>
            <span>20,000 MAD</span>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Your Name</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="+212 " 
              required 
            />
          </div>
        </div>
        
        {/* Specific Requirements */}
        <div className="space-y-2">
          <Label htmlFor="requirements" className="text-white">Specific Requirements (Optional)</Label>
          <Textarea 
            id="requirements" 
            value={requirements} 
            onChange={(e) => setRequirements(e.target.value)} 
            placeholder="E.g., specific brand preferences, must-have components, color theme, etc." 
            rows={4} 
          />
        </div>
        
        {/* Submit Button */}
        <Button type="submit" className="btn-mustang w-full">
          Request Quote via WhatsApp
        </Button>
      </form>
    </div>
  );
};

export default CustomBuildForm;
