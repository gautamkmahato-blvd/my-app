import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { billingService } from '@/app/service/supabase/billing/billingService';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    if (process.env.ALLOW_INTERNAL_PLAN_SUBSCRIBE !== 'true') {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: 'Forbidden',
          message: 'Internal subscribe is disabled. Use Polar checkout to purchase a plan.',
        },
        { status: 403 }
      );
    }

    const clerkUser = await currentUser();
    const clerkId = clerkUser?.id;
    if (!clerkId) {
      return NextResponse.json(
        { success: false, result: {}, error: 'Unauthorized', message: 'User not signed in' },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const planId = body?.planId;

    if (!planId || typeof planId !== 'string') {
      return NextResponse.json(
        { success: false, result: {}, error: 'planId required', message: 'Missing planId' },
        { status: 400 }
      );
    }

    const serviceRes = await billingService(clerkId, planId);

    if (!serviceRes.success) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: serviceRes.error || 'Subscription failed',
          message: serviceRes.message || 'Failed to subscribe',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        result: serviceRes.result ?? {},
        message: serviceRes.message ?? 'Subscribed successfully',
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Unexpected error in subscribe route:', err);
    return NextResponse.json(
      { success: false, result: {}, error: 'Internal Server Error', message: 'Failed' },
      { status: 500 }
    );
  }
}
