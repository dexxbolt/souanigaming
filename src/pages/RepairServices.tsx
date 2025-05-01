
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import WhatsAppButton from '../components/WhatsAppButton';
import { Shield, Clock, Award, Layers } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RepairServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Hardware Repairs",
      icon: <Shield className="w-12 h-12 text-mustang-red" />,
      items: [
        "Screen replacement",
        "Motherboard repair",
        "Power supply replacement",
        "GPU/CPU installation",
        "RAM/SSD upgrades"
      ]
    },
    {
      id: 2,
      title: "Software Solutions",
      icon: <Layers className="w-12 h-12 text-mustang-red" />,
      items: [
        "Windows installation",
        "Virus removal",
        "Driver updates",
        "System optimization",
        "Data recovery"
      ]
    },
    {
      id: 3,
      title: "Custom Builds",
      icon: <Award className="w-12 h-12 text-mustang-red" />,
      items: [
        "Gaming PCs",
        "Workstations",
        "Content creation rigs",
        "Budget builds",
        "High-end setups"
      ]
    }
  ];

  const pricingItems = [
    { service: "OS Reinstall", price: 100 },
    { service: "Thermal Paste & Clean-up", price: 120 },
    { service: "GPU Installation", price: 50 },
    { service: "RAM/SSD Installation", price: 50 },
    { service: "PC Build (Basic)", price: 300 },
    { service: "PC Build (Advanced)", price: 500 },
    { service: "Data Recovery (Basic)", price: 200 },
    { service: "Virus Removal", price: 150 }
  ];

  const steps = [
    {
      id: 1,
      title: "Free Diagnosis",
      description: "We'll assess your device and provide a free diagnosis (or small fee for complex issues)."
    },
    {
      id: 2,
      title: "WhatsApp Consultation",
      description: "We'll discuss the issue, repair options, and costs via WhatsApp."
    },
    {
      id: 3,
      title: "Fast Repair",
      description: "Most repairs are completed within 1-3 days."
    },
    {
      id: 4,
      title: "Pick Up & Pay",
      description: "Once fixed, pick up your device and pay only when satisfied."
    }
  ];

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Repair Services</h1>
        <p className="text-gray-300 max-w-3xl mb-12">
          From hardware failures to software issues, our expert technicians can diagnose and fix your tech problems quickly and affordably.
        </p>
        
        {/* Service Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map(service => (
            <div key={service.id} className="bg-mustang-gray rounded-lg p-6 transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-white text-center mb-4">{service.title}</h2>
              <ul className="text-gray-300">
                {service.items.map((item, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span className="text-mustang-red mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(step => (
              <div key={step.id} className="bg-mustang-gray rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-mustang-red flex items-center justify-center text-white font-bold">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pricing Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Pricing</h2>
          <div className="bg-mustang-gray rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-right text-white">Price (MAD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingItems.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-right text-mustang-red">{item.price} MAD</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            * Prices may vary depending on the complexity of the issue. Contact us for a precise quote.
          </p>
        </div>
        
        {/* CTA */}
        <div className="bg-mustang-gray rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Fix Your Device?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Contact us now for a free diagnosis and quick repair quote.
          </p>
          <WhatsAppButton 
            label="Book a Repair Now" 
            message="Hi, I'd like to fix my [Device Type]. It has this issue: [Describe Problem]"
            className="text-lg py-3 px-8"
          />
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default RepairServices;
