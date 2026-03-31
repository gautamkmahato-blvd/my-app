import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getPolarAccessTokenForApi, getPolarCheckoutApiUrl, isPolarSandbox } from '@/config/polar/env';
import { resolvePlanForCheckout } from '@/lib/billing/resolvePlanForCheckout';
import { ratelimit } from '@/lib/upstash/rateLimiter';


export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Too many requests' },
        { status: 429 }
      );
    }

    const clerkUser = await currentUser();
    const clerkId = clerkUser?.id;
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', message: 'User not signed in via Clerk' },
        { status: 401 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const productId = body?.productId;
    const successUrl = body?.successUrl;
    const cancelUrl = body?.cancelUrl;

    if (!productId || typeof productId !== 'string') {
      return NextResponse.json(
        { success: false, error: 'productId required', message: 'Missing productId' },
        { status: 400 }
      );
    }
    if (!successUrl || typeof successUrl !== 'string') {
      return NextResponse.json(
        { success: false, error: 'successUrl required', message: 'Missing successUrl' },
        { status: 400 }
      );
    }

    const { plan: planRow, dbError } = await resolvePlanForCheckout(productId);

    if (dbError) {
      return NextResponse.json(
        { success: false, error: 'DB error', message: dbError },
        { status: 500 }
      );
    }

    if (!planRow) {
      return NextResponse.json(
        {
          success: false,
          error: 'Plan not found',
          message:
            'productId does not match any plan. Use a Polar product id from lib/billing/plans.ts (POLAR_PRODUCT_IDS) or seed the plans table.',
        },
        { status: 404 }
      );
    }

    const isSandbox = isPolarSandbox();
    const apiUrl = getPolarCheckoutApiUrl();
    const polarToken = getPolarAccessTokenForApi();

    /** Polar Checkout `products` must use Polar’s product id (UUID from dashboard). */
    const polarProductId = (planRow.provider_product_id as string | null) || productId;

    if (!polarProductId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Plan misconfiguration',
          message: 'Plan is missing provider_product_id; set it to the Polar product id',
        },
        { status: 400 }
      );
    }

    if (!polarToken) {
      console.error('Missing Polar API token for mode:', isSandbox ? 'sandbox' : 'production');
      return NextResponse.json(
        { success: false, error: 'Server misconfiguration', message: 'Missing Polar API token' },
        { status: 500 }
      );
    }

    const metadata = {
      clerk_id: clerkId,
      plan_id: planRow.id,
      product_id: productId,
      provider_product_id: planRow.provider_product_id ?? null,
      env: isSandbox ? 'sandbox' : 'production',
      internal_order_id: `order_${Date.now()}`,
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${polarToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products: [polarProductId],
        success_url: successUrl,
        cancel_url: cancelUrl ?? undefined,
        metadata,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error('Polar checkout creation failed', { status: response.status, body: data });
      return NextResponse.json(
        {
          success: false,
          error: data?.error?.message || 'Failed to create checkout',
          message: 'Polar API error',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        result: {
          checkoutUrl: data?.url,
          checkoutId: data?.id,
          metadataSent: metadata,
        },
        message: 'Checkout created',
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error('create-checkout unexpected error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Internal Server Error',
        message: 'Failed to create checkout',
      },
      { status: 500 }
    );
  }
}
