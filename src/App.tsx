
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import RepairServices from "./pages/RepairServices";
import HowToOrder from "./pages/HowToOrder";
import Contact from "./pages/Contact";
import OrderConfirmation from "./pages/OrderConfirmation";
import CustomBuilds from "./pages/CustomBuilds";
import Terms from "./pages/Terms";
import WhatsAppProvider from "./context/WhatsAppContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <WhatsAppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/repair-services" element={<RepairServices />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order-confirmation/:productName?" element={<OrderConfirmation />} />
            <Route path="/custom-builds" element={<CustomBuilds />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </WhatsAppProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
