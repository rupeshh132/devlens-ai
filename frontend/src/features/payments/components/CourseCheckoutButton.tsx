import React, { useState } from 'react';
import { toast } from 'sonner';
import { createOrder, verifyPayment } from '../services/CheckoutService';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';

// Extend window object for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CourseCheckoutButtonProps {
  courseId: string;
  courseName: string;
  pricePaise: number;
  onSuccess?: () => void;
}

export const CourseCheckoutButton: React.FC<CourseCheckoutButtonProps> = ({
  courseId,
  courseName,
  pricePaise,
  onSuccess
}) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!user) {
      toast.error("Please login to purchase courses.");
      return;
    }

    try {
      setLoading(true);
      const isLoaded = await loadRazorpayScript();
      
      if (!isLoaded) {
        toast.error('Failed to load payment gateway. Please check your connection.');
        setLoading(false);
        return;
      }

      // 1. Create order on backend
      const orderId = await createOrder(courseId);

      // 2. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'dummy_key_id', // Add this to frontend .env
        amount: pricePaise,
        currency: 'INR',
        name: 'PrepLens',
        description: courseName,
        order_id: orderId,
        handler: async function (response: any) {
          try {
            // 3. Verify on backend
            const isVerified = await verifyPayment(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature
            );

            if (isVerified) {
              toast.success('Payment successful! Course unlocked.');
              if (onSuccess) onSuccess();
            } else {
              toast.error('Payment verification failed. Please contact support.');
            }
          } catch (err) {
            toast.error('Error verifying payment.');
          }
        },
        prefill: {
          name: user.fullName || user.email,
          email: user.email,
        },
        theme: {
          color: '#3b82f6',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function (response: any) {
        toast.error(`Payment failed: ${response.error.description}`);
      });
      
      razorpay.open();
    } catch (error: any) {
      if (error?.response?.status === 409) {
        toast.info("You already own this course!");
      } else {
        toast.error('Failed to initiate payment.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-brand-coral/30 disabled:opacity-70"
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin mr-2" />
      ) : null}
      {loading ? 'Processing...' : `Enroll Now - ₹${pricePaise / 100}`}
    </button>
  );
};
