import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getPolarAccessTokenForApi, getPolarCheckoutApiUrl, isPolarSandbox } from '@/config/polar/env';
import { POLAR_CUSTOM_PAY_PRODUCT_ID } from '@/lib/billing/plans';
import { ratelimit } from '@/lib/upstash/rateLimiter';

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json({ success: false, error: 'Too many requests' }, { status: 429 });
    }

    const clerkUser = await currentUser();
    const clerkId = clerkUser?.id;

    if (!clerkId) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const { productId, amount, isCustom, successUrl, cancelUrl } = body;

    const isCustomFlow = isCustom === true;

    /** Custom pay uses a dedicated Polar product id from lib/billing/plans.ts (ignore client productId). */
    let resolvedProductId: string;
    if (isCustomFlow) {
      resolvedProductId = POLAR_CUSTOM_PAY_PRODUCT_ID;
    } else {
      if (!productId || typeof productId !== 'string') {
        return NextResponse.json({ success: false, error: 'productId required' }, { status: 400 });
      }
      resolvedProductId = productId.trim();
    }

    if (!successUrl || typeof successUrl !== 'string') {
      return NextResponse.json({ success: false, error: 'successUrl required' }, { status: 400 });
    }

    let priceOverrideCents: number | null = null;

    if (isCustomFlow) {
      if (typeof amount !== 'number' || amount < 1) {
        return NextResponse.json({ success: false, error: 'Invalid amount' }, { status: 400 });
      }

      priceOverrideCents = Math.round(amount * 100);
    }

    const isSandbox = isPolarSandbox();
    const apiUrl = getPolarCheckoutApiUrl();
    const polarToken = getPolarAccessTokenForApi();

    if (!polarToken) {
      return NextResponse.json({ success: false, error: 'Missing Polar token' }, { status: 500 });
    }

    const payload: Record<string, unknown> = {
      products: [resolvedProductId],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        clerk_id: clerkId,
        billing_type: 'custom',
        env: isSandbox ? 'sandbox' : 'production',
      },
    };

    if (priceOverrideCents) {
      payload.price = {
        amount: priceOverrideCents,
        currency: 'USD',
      };
    }

    const polarRes = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${polarToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const polarData = await polarRes.json().catch(() => null);

    if (!polarRes.ok) {
      return NextResponse.json(
        {
          success: false,
          error: polarData?.error?.message || 'Failed to create Polar checkout',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        result: {
          checkoutUrl: polarData.url,
          checkoutId: polarData.id,
        },
        message: 'Checkout created',
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
