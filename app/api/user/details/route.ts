// app/api/user/details/route.ts
import { NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { getUser } from '@/app/service/supabase/user/getUser';
import createOrUpdateUser from '@/app/service/supabase/user/createOrUpdateUser';
import { ApiResponse } from '@/types/ApiResponse';
import { resolveClerkIdFromBearerRequest } from '@/lib/extension-route-helpers';
import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';

/** When no `users` row exists (e.g. webhook missed), create it from Clerk. */
async function syncUserFromClerkIfMissing(clerkId: string): Promise<boolean> {
  try {
    const client = await clerkClient();
    const u = await client.users.getUser(clerkId);
    const email = u.emailAddresses?.[0]?.emailAddress ?? null;
    const name =
      [u.firstName, u.lastName].filter(Boolean).join(' ').trim() || u.username || null;
    const res = await createOrUpdateUser({
      clerk_id: clerkId,
      name,
      username: u.username ?? null,
      email,
      image: u.imageUrl ?? null,
    });
    return res.success;
  } catch (e) {
    console.error('[user/details] syncUserFromClerkIfMissing', e);
    return false;
  }
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET(req: Request): Promise<NextResponse<ApiResponse>> {
  try {
    let clerkId: string | undefined;

    const bearer = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '').trim();
    if (bearer) {
      clerkId = (await resolveClerkIdFromBearerRequest(req)) ?? undefined;
    } else {
      const { userId } = await auth();
      clerkId = userId ?? undefined;
    }

    if (!clerkId) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: 'Unauthorized',
        },
        { status: 401, headers: corsHeaders }
      );
    }

    let res = await getUser(clerkId);

    if (!res.success) {
      const errStr = typeof res.error === 'string' ? res.error : String(res.error ?? 'Database error');
      if (errStr === 'User not found') {
        const synced = await syncUserFromClerkIfMissing(clerkId);
        if (synced) {
          res = await getUser(clerkId);
        }
      }
    }

    if (!res.success) {
      // map 'User not found' to 404, otherwise 500
      const errStr = typeof res.error === 'string' ? res.error : String(res.error ?? 'Database error');
      if (errStr === 'User not found') {
        return NextResponse.json(
          { success: false, result: {}, error: errStr },
          { status: 404, headers: corsHeaders }
        );
      }
      return NextResponse.json(
        { success: false, result: {}, error: errStr },
        { status: 500, headers: corsHeaders }
      );
    }

    const userRow = res.result as Record<string, unknown> & { id: string };
    const { creditsRemaining } = await hasPremiumAccessForClerkId(clerkId);

    let planLabel = 'Free plan';
    const { data: latestPay } = await supabaseAdmin
      .from('payments')
      .select('plan_id')
      .eq('user_id', userRow.id)
      .eq('payment_provider', 'polar')
      .eq('status', 'succeeded')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (latestPay?.plan_id) {
      const { data: plan } = await supabaseAdmin
        .from('plans')
        .select('name')
        .eq('id', latestPay.plan_id as string)
        .maybeSingle();
      if (plan?.name && typeof plan.name === 'string' && plan.name.trim()) {
        planLabel = plan.name.trim();
      }
    }

    return NextResponse.json(
      {
        success: true,
        result: {
          ...userRow,
          plan_label: planLabel,
          credits_remaining: creditsRemaining,
        },
        message: 'User fetched successfully',
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error('Unexpected error in GET /api/user:', err);
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: err?.message ? String(err.message) : 'Internal Server Error',
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
