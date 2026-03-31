'use client';

import { useState } from 'react';
import { CreditCard, AlertCircle } from 'lucide-react';
import { POLAR_CUSTOM_PAY_PRODUCT_ID } from '@/lib/billing/plans';

/**
 * Custom amount checkout: uses `POLAR_CUSTOM_PAY_PRODUCT_ID` with Polar `price` override.
 * Ensure that product in Polar allows checkout price override.
 */

export default function CustomBilling() {
  const [amount, setAmount] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!amount || amount < 1) {
        setError('Minimum amount is $1');
        return;
      }

      const origin = window.location.origin;

      const res = await fetch('/api/custom-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          isCustom: true,
          productId: POLAR_CUSTOM_PAY_PRODUCT_ID,
          amount,
          successUrl: `${origin}/polar?checkout=success`,
          cancelUrl: `${origin}/polar?checkout=cancel`,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error((data && typeof data.error === 'string' ? data.error : null) || 'Checkout failed');
      }

      const checkoutUrl = data?.result?.checkoutUrl;
      if (!checkoutUrl || typeof checkoutUrl !== 'string') {
        throw new Error('No checkout URL returned');
      }

      window.location.href = checkoutUrl;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
      <h2 className="text-xl font-bold mb-1 text-gray-900">Custom amount</h2>
      <p className="text-sm text-gray-600 mb-4">
        Pay any whole-dollar amount (USD). Credits: <strong>$1 = 100 credits</strong> (based on the charged
        total after payment).
      </p>

      <label className="block text-sm font-medium text-gray-700 mb-1">Amount (USD)</label>
      <input
        type="number"
        min={1}
        step={1}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-gray-900"
      />

      <button
        type="button"
        onClick={createCheckout}
        disabled={loading}
        className="w-full py-3 rounded-xl bg-gradient-to-b from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <CreditCard className="w-5 h-5" />
        {loading ? 'Processing…' : `Pay $${amount}`}
      </button>

      {error && (
        <div className="mt-4 flex gap-2 items-start text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          {error}
        </div>
      )}
    </div>
  );
}
