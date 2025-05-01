import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type WhatsAppContextType = {
  sendWhatsAppMessage: (message: string, productName?: string) => void;
  whatsappNumber: string;
};

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export const useWhatsApp = () => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
};

const WhatsAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const whatsappNumber = '+212600000000'; // Replace with your actual WhatsApp number
  
  const sendWhatsAppMessage = (message: string, productName?: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    if (productName) {
      // If a product name is provided, redirect to the confirmation page first
      navigate(`/order-confirmation/${encodeURIComponent(productName)}`);
      // Then set a timeout to redirect to WhatsApp
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 2000);
    } else {
      // Otherwise, go directly to WhatsApp
      window.location.href = whatsappUrl;
    }
  };

  const value = {
    sendWhatsAppMessage,
    whatsappNumber,
  };

  return (
    <WhatsAppContext.Provider value={value}>
      {children}
    </WhatsAppContext.Provider>
  );
};

export default WhatsAppProvider;
