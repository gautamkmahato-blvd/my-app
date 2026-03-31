// components/PlanSelector.tsx
'use client';

import subscribeToPlan from '@/app/ui-functions/billing/subscribeToPlan';
import { UiFunctionResponse } from '@/app/ui-functions/types';
import React, { useState } from 'react';


type Plan = {
  id: string;
  name: string;
  description?: string;
  price: number;
  credits: number;
};

export default function PlanSelector({ plans }: { plans: Plan[] }) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(plans?.[0]?.id ?? null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!plans || plans.length === 0) {
    return <div>No plans available</div>;
  }

  const handleSubscribe = async () => {
    if (!selectedPlan) return;
    setLoading(true);
    setMessage(null);
    setError(null);

    const res: UiFunctionResponse<any> = await subscribeToPlan(selectedPlan);
    setLoading(false);

    if (!res.success) {
      setError(res.error || res.message || 'Failed to subscribe');
      return;
    }

    setMessage(res.message || 'Subscribed successfully');
    // Optionally: use res.result to update UI (credits, payment info)
    // e.g. show remaining credits: res.result.credits.remaining_credits
  };

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold mb-3">Choose a plan</h3>

      <div className="space-y-2 mb-4">
        {plans.map((p) => (
          <label key={p.id} className="flex items-center gap-3 p-2 border rounded cursor-pointer">
            <input
              type="radio"
              name="plan"
              value={p.id}
              checked={selectedPlan === p.id}
              onChange={() => setSelectedPlan(p.id)}
            />
            <div>
              <div className="font-medium">{p.name} — ${p.price}</div>
              <div className="text-sm text-gray-600">{p.description}</div>
              <div className="text-xs text-gray-500">{p.credits} credits</div>
            </div>
          </label>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleSubscribe}
          disabled={loading || !selectedPlan}
          className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Buy / Add Credits'}
        </button>

        {message && <div className="text-green-600">{message}</div>}
        {error && <div className="text-red-600">{error}</div>}
      </div>
    </div>
  );
}
