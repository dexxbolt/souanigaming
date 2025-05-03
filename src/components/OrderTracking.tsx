
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, Package, TruckDelivery, CheckCircle, Calendar } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const OrderTracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState<string>('');
  const [trackingResult, setTrackingResult] = useState<null | {
    status: 'processing' | 'shipped' | 'delivered' | 'not-found';
    message: string;
    details?: {
      orderId: string;
      orderDate: string;
      estimatedDelivery: string;
      currentLocation?: string;
      statusHistory?: { date: string; status: string }[];
    };
  }>(null);

  const handleTracking = () => {
    // This would normally be an API call to a real tracking system
    // For demo purposes, we're just simulating different statuses
    if (!trackingId) {
      return;
    }

    const demoData = {
      'MG12345': {
        status: 'processing' as const,
        message: 'Your order is being processed',
        details: {
          orderId: 'MG12345',
          orderDate: '2025-05-01',
          estimatedDelivery: '2025-05-05',
          statusHistory: [
            { date: '2025-05-01 14:30', status: 'Order received' },
            { date: '2025-05-02 09:15', status: 'Payment confirmed' },
            { date: '2025-05-02 16:40', status: 'Processing' }
          ]
        }
      },
      'MG67890': {
        status: 'shipped' as const,
        message: 'Your order has been shipped',
        details: {
          orderId: 'MG67890',
          orderDate: '2025-04-28',
          estimatedDelivery: '2025-05-04',
          currentLocation: 'Casablanca Distribution Center',
          statusHistory: [
            { date: '2025-04-28 10:20', status: 'Order received' },
            { date: '2025-04-28 16:45', status: 'Payment confirmed' },
            { date: '2025-04-29 11:30', status: 'Processing' },
            { date: '2025-05-01 09:15', status: 'Shipped' }
          ]
        }
      },
      'MG24680': {
        status: 'delivered' as const,
        message: 'Your order has been delivered',
        details: {
          orderId: 'MG24680',
          orderDate: '2025-04-25',
          estimatedDelivery: '2025-04-30',
          statusHistory: [
            { date: '2025-04-25 13:10', status: 'Order received' },
            { date: '2025-04-25 17:30', status: 'Payment confirmed' },
            { date: '2025-04-26 10:45', status: 'Processing' },
            { date: '2025-04-27 08:20', status: 'Shipped' },
            { date: '2025-04-30 14:15', status: 'Delivered' }
          ]
        }
      }
    };

    if (demoData[trackingId as keyof typeof demoData]) {
      setTrackingResult(demoData[trackingId as keyof typeof demoData]);
    } else {
      setTrackingResult({
        status: 'not-found',
        message: 'Order not found. Please check your tracking ID.'
      });
    }
  };

  const renderStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="w-16 h-16 text-yellow-500" />;
      case 'shipped':
        return <TruckDelivery className="w-16 h-16 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="w-16 h-16 text-green-500" />;
      default:
        return <Search className="w-16 h-16 text-mustang-red" />;
    }
  };

  return (
    <div className="bg-mustang-gray rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4">Track Your Order</h3>
      <p className="text-gray-300 mb-6">
        Enter your order tracking ID to check the current status of your order.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          type="text"
          placeholder="Enter tracking ID (e.g., MG12345)"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="bg-mustang-dark border-gray-700 text-white"
        />
        <Button 
          onClick={handleTracking} 
          className="bg-mustang-red hover:bg-red-700"
        >
          <Search className="w-4 h-4 mr-2" /> Track Order
        </Button>
      </div>
      
      {trackingResult && (
        <div className="mt-6">
          {trackingResult.status === 'not-found' ? (
            <Alert className="bg-red-900 border-red-700">
              <AlertTitle className="text-white">Order Not Found</AlertTitle>
              <AlertDescription className="text-gray-300">
                {trackingResult.message}
              </AlertDescription>
            </Alert>
          ) : (
            <div className="bg-mustang-dark p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  {renderStatusIcon(trackingResult.status)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Order ID: {trackingResult.details?.orderId}
                  </h4>
                  <p className="text-mustang-red font-bold mb-2">
                    Status: {trackingResult.message}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-mustang-red" />
                      <span>Order Date: {trackingResult.details?.orderDate}</span>
                    </div>
                    <div className="flex items-center">
                      <TruckDelivery className="w-4 h-4 mr-2 text-mustang-red" />
                      <span>Est. Delivery: {trackingResult.details?.estimatedDelivery}</span>
                    </div>
                    {trackingResult.details?.currentLocation && (
                      <div className="flex items-center md:col-span-2">
                        <MapPin className="w-4 h-4 mr-2 text-mustang-red" />
                        <span>Current Location: {trackingResult.details.currentLocation}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {trackingResult.details?.statusHistory && (
                <div>
                  <h5 className="text-white font-bold mb-3 border-b border-gray-700 pb-2">
                    Tracking History
                  </h5>
                  <div className="space-y-4">
                    {trackingResult.details.statusHistory.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 relative">
                          <div className="w-4 h-4 rounded-full bg-mustang-red"></div>
                          {index < trackingResult.details!.statusHistory!.length - 1 && (
                            <div className="absolute top-4 bottom-0 left-[7px] w-[2px] h-full bg-gray-700"></div>
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="text-gray-400 text-sm">{item.date}</p>
                          <p className="text-white">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {!trackingResult && (
        <Alert className="bg-mustang-dark border-gray-700">
          <AlertTitle className="text-white">Try these examples</AlertTitle>
          <AlertDescription className="text-gray-300">
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>MG12345 - Processing order</li>
              <li>MG67890 - Shipped order</li>
              <li>MG24680 - Delivered order</li>
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default OrderTracking;
