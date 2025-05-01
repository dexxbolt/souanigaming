
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import WhatsAppButton from '../components/WhatsAppButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle the form submission here
    // For now, we'll just show an alert
    alert("Thanks for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-3xl mb-12">
          Have a question about our products or services? Reach out to us using any of the methods below.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-mustang-gray rounded-lg p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-mustang-dark p-3 rounded-lg mr-4">
                    <MapPin className="text-mustang-red h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Our Location</h3>
                    <p className="text-gray-400">123 Gaming Street, Casablanca, Morocco</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mustang-dark p-3 rounded-lg mr-4">
                    <Phone className="text-mustang-red h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone Number</h3>
                    <p className="text-gray-400">+212 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mustang-dark p-3 rounded-lg mr-4">
                    <Mail className="text-mustang-red h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Address</h3>
                    <p className="text-gray-400">info@mustanggaming.ma</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mustang-dark p-3 rounded-lg mr-4">
                    <Clock className="text-mustang-red h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Business Hours</h3>
                    <p className="text-gray-400">Monday - Saturday: 9am - 7pm</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-mustang-gray rounded-lg p-4">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-white">Google Map would be embedded here</p>
                {/* In production, replace with actual Google Maps embed */}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-mustang-gray rounded-lg p-8">
            <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Your Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  rows={6} 
                  required 
                />
              </div>
              
              <div>
                <Button type="submit" className="btn-mustang w-full">
                  Send Message
                </Button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-white font-semibold mb-4">Prefer WhatsApp?</h3>
              <WhatsAppButton 
                label="Start WhatsApp Chat" 
                message="Hi, I'd like to inquire about your products/services."
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Contact;
