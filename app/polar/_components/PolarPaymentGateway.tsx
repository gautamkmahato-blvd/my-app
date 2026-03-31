'use client';

import React, { useState } from 'react';
import { CreditCard, Check, AlertCircle } from 'lucide-react';
import type { BillingPlanKey } from '@/lib/billing/plans';
import {
  CHECKOUT_PLAN_ORDER,
  PLAN_DISPLAY,
  getPolarProductId,
} from '@/lib/billing/plans';

function formatUsd(amount: number) {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(amount);
}

export default function PolarPaymentGateway() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [selectedKey, setSelectedKey] = useState<BillingPlanKey>(CHECKOUT_PLAN_ORDER[0]);

  const selectedDisplay = PLAN_DISPLAY[selectedKey];

  const createCheckout = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const productId = getPolarProductId(selectedKey);
      const origin = window.location.origin;

      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          productId,
          successUrl: `${origin}/polar?checkout=success`,
          cancelUrl: `${origin}/polar?checkout=cancel`,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const message = data?.error || data?.message || 'Failed to create checkout';
        setError(String(message));
        return;
      }

      const checkoutUrl =
        data?.checkoutUrl ?? data?.result?.checkoutUrl ?? data?.result?.url ?? null;

      if (!checkoutUrl || typeof checkoutUrl !== 'string') {
        setError('No checkout URL returned from server');
        return;
      }

      setSuccess(true);
      window.location.href = checkoutUrl;
    } catch (err: unknown) {
      console.error('createCheckout error', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6">
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Polar checkout</h1>
            <p className="text-blue-100 text-sm">Plans use product IDs from lib/billing/plans.ts</p>
          </div>

          <div className="p-6 grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              {CHECKOUT_PLAN_ORDER.map((key) => {
                const p = PLAN_DISPLAY[key];
                const isSelected = key === selectedKey;
                return (
                  <div
                    key={key}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedKey(key)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedKey(key);
                      }
                    }}
                    className={`border rounded-xl p-4 cursor-pointer transition-shadow hover:shadow-md ${
                      isSelected ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                      {isSelected && <Check className="w-5 h-5 text-green-500" aria-hidden />}
                    </div>

                    <p className="text-gray-600 text-sm mt-2">{p.description}</p>

                    <div className="mt-4 flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{formatUsd(p.priceUsd)}</span>
                        <span className="text-gray-500 ml-2 text-sm">/ purchase</span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">{p.credits} credits included</p>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-4">
              <div className="mb-4">
                <h4 className="text-lg font-medium">Selected</h4>
                <p className="text-sm text-gray-600">
                  {selectedDisplay.name} — {formatUsd(selectedDisplay.priceUsd)} ·{' '}
                  {selectedDisplay.credits} credits
                </p>
              </div>

              <button
                type="button"
                onClick={createCheckout}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Checkout with Polar
                  </>
                )}
              </button>

              {error && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Error</p>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
              )}

              {success && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Redirecting</p>
                    <p className="text-green-600 text-sm">Opening Polar checkout…</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-gray-800 mb-3">Checklist</h3>
          <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
            <li>Signed in with Clerk (this route is protected).</li>
            <li>
              Supabase <code className="text-xs bg-gray-100 px-1 rounded">plans</code> rows use the same{' '}
              <code className="text-xs bg-gray-100 px-1 rounded">provider_product_id</code> as{' '}
              <code className="text-xs bg-gray-100 px-1 rounded">POLAR_PRODUCT_IDS</code>.
            </li>
            <li>Polar webhook points to <code className="text-xs bg-gray-100 px-1 rounded">/api/webhooks/polar</code>.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
