import { useState, useEffect } from 'react';
import { learnApi } from '../lib/learn-api';

interface PremiumStatus {
  isPremium: boolean;
  plan: string; // 'FREE' | 'CLASS_9_10' etc.
  subscribedUntil: string | null;
  loading: boolean;
}

export function usePremium(): PremiumStatus {
  const cachedPlan = typeof window !== 'undefined' ? localStorage.getItem('learn_subscription_plan') : null;
  const initialIsPremium = Boolean(cachedPlan && cachedPlan.toUpperCase() !== 'FREE');

  const [status, setStatus] = useState<PremiumStatus>({
    isPremium: initialIsPremium,
    plan: cachedPlan || 'FREE',
    subscribedUntil: null,
    loading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('learn_token') || localStorage.getItem('token');
    if (!token) {
      setStatus({ isPremium: false, plan: 'FREE', subscribedUntil: null, loading: false });
      return;
    }

    learnApi
      .get('/profile')
      .then((res) => {
        const data = res.data || {};
        const plan: string = data.subscriptionPlan || 'FREE';
        const subscribedUntil: string | null = data.subscribedUntil || null;

        // Comprehensive check:
        // 1. Check isPaidUser or paidUser boolean flags
        const isPaidFlag = Boolean(data.paidUser ?? data.isPaidUser);

        // 2. Check if subscriptionPlan is not FREE and subscribedUntil is in the future
        const hasActivePlanName = typeof plan === 'string' && plan.trim().toUpperCase() !== 'FREE';
        const isNotExpired = !subscribedUntil || new Date(subscribedUntil).getTime() > Date.now();
        const hasValidPlan = hasActivePlanName && isNotExpired;

        const isPremium = isPaidFlag || hasValidPlan;

        if (plan) {
          localStorage.setItem('learn_subscription_plan', plan);
        }

        setStatus({ isPremium, plan, subscribedUntil, loading: false });
      })
      .catch(() => {
        const hasCached = Boolean(cachedPlan && cachedPlan.toUpperCase() !== 'FREE');
        setStatus({ isPremium: hasCached, plan: cachedPlan || 'FREE', subscribedUntil: null, loading: false });
      });
  }, [cachedPlan]);

  return status;
}
