import type { UiFunctionResponse } from '../types';

function subscribeUrl(): string {
  if (typeof window !== 'undefined') {
    return '/api/plans/subscribe';
  }
  const base = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  return `${base.replace(/\/$/, '')}/api/plans/subscribe`;
}

export default async function subscribeToPlan(
  planId: string
): Promise<UiFunctionResponse<unknown>> {
  if (!planId) {
    return { success: false, result: {}, error: 'planId required', message: 'Missing planId' };
  }

  try {
    const res = await fetch(subscribeUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ planId }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok || !json) {
      return {
        success: false,
        result: {},
        error: json?.error || `Server error ${res.status}`,
        message: json?.message || 'Failed to subscribe to plan',
      };
    }

    if (!json.success) {
      return {
        success: false,
        result: json.result ?? {},
        error: json.error || 'Unknown',
        message: json.message || 'Failed',
      };
    }

    return {
      success: true,
      result: json.result ?? {},
      message: json.message ?? 'Subscribed successfully',
    };
  } catch (err: unknown) {
    console.error('subscribeToPlan error:', err);
    return {
      success: false,
      result: {},
      error: err instanceof Error ? err.message : 'Network error',
      message: 'Failed',
    };
  }
}
