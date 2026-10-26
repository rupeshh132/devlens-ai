import { useState, useEffect } from 'react';
import { api } from '../lib/api';

interface DevPremiumStatus {
  isDevPro: boolean;
  plan: string;
  loading: boolean;
}

export function useDevPremium(): DevPremiumStatus {
  const [status, setStatus] = useState<DevPremiumStatus>({
    isDevPro: false,
    plan: 'FREE',
    loading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setStatus({ isDevPro: false, plan: 'FREE', loading: false });
      return;
    }

    api
      .get('/user/profile')
      .then((res) => {
        const plan: string = res.data.plan || res.data.subscriptionPlan || 'FREE';
        const isDevPro = plan.toUpperCase().includes('PRO');
        setStatus({ isDevPro, plan, loading: false });
      })
      .catch(() => {
        setStatus({ isDevPro: false, plan: 'FREE', loading: false });
      });
  }, []);

  return status;
}
