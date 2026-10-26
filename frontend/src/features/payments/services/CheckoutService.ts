import { api } from '@/lib/api';

export const createOrder = async (courseId: string): Promise<string> => {
  const response = await api.post('/payments/create-order', { courseId });
  return response.data.orderId;
};

export const verifyPayment = async (
  razorpayOrderId: string,
  razorpayPaymentId: string,
  razorpaySignature: string
): Promise<boolean> => {
  const response = await api.post('/payments/verify', {
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  });
  return response.data.status === 'success';
};
