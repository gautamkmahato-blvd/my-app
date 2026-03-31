'use client';

import CustomBilling from './_components/CustomBilling';
import PolarPaymentGateway from './_components/PolarPaymentGateway';

/**
 * /polar — test Polar checkout (protected by Clerk middleware).
 * Product IDs: lib/billing/plans.ts (POLAR_PRODUCT_IDS).
 */
export default function PolarPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Billing & Polar</h1>
        <p className="mt-1 text-sm text-gray-600">
          Fixed plans go through <code className="text-xs bg-gray-100 px-1 rounded">/api/create-checkout</code>.
          Custom amounts use <code className="text-xs bg-gray-100 px-1 rounded">/api/custom-checkout</code>.
        </p>
      </div>

      <PolarPaymentGateway />

      <CustomBilling />
    </div>
  );
}
