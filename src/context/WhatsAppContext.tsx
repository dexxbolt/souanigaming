
import React, { createContext, useContext } from 'react';

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
  const whatsappNumber = '+212625016559'; // Updated WhatsApp number
  
  const sendWhatsAppMessage = (message: string, productName?: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    if (productName) {
      // Instead of using navigate, we'll use window.location directly for navigation
      // First store the WhatsApp URL to redirect to after confirmation
      sessionStorage.setItem('whatsappRedirect', whatsappUrl);
      // Then navigate to the confirmation page
      window.location.href = `/order-confirmation/${encodeURIComponent(productName)}`;
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
