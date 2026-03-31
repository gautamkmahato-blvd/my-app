import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import getUserPayments from '@/app/service/supabase/payments/getUserPayments';
import { findUserByClerkId } from '@/app/service/supabase/user/findUserByClerkId';
import type { ApiResponse } from '@/types/ApiResponse';

export async function POST(req: NextRequest) {
  try {
    const clerkUser = await currentUser();
    const clerkId = clerkUser?.id;

    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'unauthorized', message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const userResp = await findUserByClerkId(clerkId);

    if (!userResp.success || !userResp.result || typeof userResp.result !== 'object' || !('id' in userResp.result)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', message: 'Invalid user data' },
        { status: 401 }
      );
    }

    const userId = userResp.result.id;

    const serviceResp = await getUserPayments(userId);

    const response: ApiResponse = {
      success: serviceResp.success,
      result: serviceResp.result,
      error: serviceResp.error,
      message: serviceResp.message,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: 'api_error',
        message: err instanceof Error ? err.message : 'Failed to fetch payments',
      },
      { status: 500 }
    );
  }
}
