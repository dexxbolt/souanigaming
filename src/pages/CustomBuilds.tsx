
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import { useWhatsApp } from '../context/WhatsAppContext';
import { Gamepad2, Monitor, Computer, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';

const CustomBuilds: React.FC = () => {
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
  };
  
  const buildTypes = [
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
  
  const benefits = [
    'Expert component selection tailored to your needs',
    'Free assembly and testing',
    'Latest hardware with full warranty',
    'After-sale technical support',
    'Customized RGB lighting (optional)',
    'Cable management and optimization'
  ];

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Custom PC Builds</h1>
        <p className="text-gray-300 max-w-3xl mb-12">
          Get a personalized PC built specifically for your needs. We'll help you select the perfect components within your budget.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Form */}
          <div className="bg-mustang-gray rounded-lg p-8">
            <h2 className="text-xl font-bold text-white mb-6">Request a Custom Build</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Build Type */}
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
          
          {/* Right Side: Info */}
          <div>
            {/* Process */}
            <div className="bg-mustang-gray rounded-lg p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-6">Our Build Process</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-mustang-dark rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-mustang-red font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Request a Quote</h3>
                    <p className="text-gray-400">Fill out the form with your requirements and budget</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-mustang-dark rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-mustang-red font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Consultation</h3>
                    <p className="text-gray-400">Our technicians will discuss options and recommendations</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-mustang-dark rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-mustang-red font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Build & Test</h3>
                    <p className="text-gray-400">We assemble your PC with care and test everything</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-mustang-dark rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-mustang-red font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Delivery</h3>
                    <p className="text-gray-400">Your new PC is delivered to your door, ready to use</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="bg-mustang-gray rounded-lg p-8">
              <h2 className="text-xl font-bold text-white mb-6">Why Choose Our Custom Builds</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mustang-red mt-0.5 mr-2 shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                <p className="text-white font-medium mb-4">Need help deciding? Chat with our experts</p>
                <Button 
                  className="btn-mustang"
                  onClick={() => sendWhatsAppMessage("Hi, I need advice about a custom PC build. Can you help me choose the right components?")}
                >
                  Get Expert Advice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default CustomBuilds;
