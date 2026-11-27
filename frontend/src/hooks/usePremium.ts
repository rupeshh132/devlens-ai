import { useState, useEffect } from 'react';
import { fetchLearnProfileCached } from '../lib/learn-api';

interface PremiumStatus {
  isPremium: boolean;
  plan: string; // 'FREE' | 'CLASS_9_10' etc.
  subscribedUntil: string | null;
  loading: boolean;
}

export function usePremium(): PremiumStatus {
  const cachedPlan = typeof window !== 'undefined' ? localStorage.getItem('learn_subscription_plan') : null;
  const cachedUntil = typeof window !== 'undefined' ? localStorage.getItem('learn_subscribed_until') : null;
  const cachedNotExpired = !cachedUntil || new Date(cachedUntil).getTime() > Date.now();
  const initialIsPremium = Boolean(cachedPlan && cachedPlan.toUpperCase() !== 'FREE' && cachedNotExpired);

  const [status, setStatus] = useState<PremiumStatus>({
    isPremium: initialIsPremium,
    plan: initialIsPremium ? (cachedPlan || 'FREE') : 'FREE',
    subscribedUntil: cachedUntil,
    // If plan is already cached locally, don't block UI behind a loading spinner while refreshing in background
    loading: cachedPlan === null,
  });

  useEffect(() => {
    let active = true;
    const token = localStorage.getItem('learn_token') || localStorage.getItem('token');
    if (!token) {
      setStatus({ isPremium: false, plan: 'FREE', subscribedUntil: null, loading: false });
      return;
    }

    fetchLearnProfileCached()
      .then((data) => {
        if (!active) return;
        const safeData = data || {};
        const plan: string = safeData.subscriptionPlan || 'FREE';
        const subscribedUntil: string | null = safeData.subscribedUntil || null;

        // 1. Check isPaidUser or paidUser boolean flags
        const isPaidFlag = Boolean(safeData.paidUser ?? safeData.isPaidUser);

        // 2. Check if subscriptionPlan is not FREE and subscribedUntil is in the future
        const hasActivePlanName = typeof plan === 'string' && plan.trim().toUpperCase() !== 'FREE';
        const isNotExpired = !subscribedUntil || new Date(subscribedUntil).getTime() > Date.now();
        const hasValidPlan = hasActivePlanName && isNotExpired;

        const isPremium = isPaidFlag || hasValidPlan;

        localStorage.setItem('learn_subscription_plan', isPremium ? plan : 'FREE');
        if (subscribedUntil) {
          localStorage.setItem('learn_subscribed_until', subscribedUntil);
        } else {
          localStorage.removeItem('learn_subscribed_until');
        }

        setStatus({ isPremium, plan: isPremium ? plan : 'FREE', subscribedUntil, loading: false });
      })
      .catch(() => {
        if (!active) return;
        const latestCached = localStorage.getItem('learn_subscription_plan');
        const latestUntil = localStorage.getItem('learn_subscribed_until');
        const notExp = !latestUntil || new Date(latestUntil).getTime() > Date.now();
        const hasCached = Boolean(latestCached && latestCached.toUpperCase() !== 'FREE' && notExp);
        setStatus({ isPremium: hasCached, plan: hasCached ? (latestCached || 'FREE') : 'FREE', subscribedUntil: latestUntil, loading: false });
      });

    return () => {
      active = false;
    };
  }, []);

  return status;
}
