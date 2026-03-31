import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { fetchAllAssets } from '@/app/service/supabase/assets/fetchAllAssets';
import { findUserByClerkId } from '@/app/service/supabase/user/findUserByClerkId';
import type { ApiResponse } from '@/types/ApiResponse';
import { resolveClerkIdFromBearerRequest, EXTENSION_CORS_HEADERS } from '@/lib/extension-route-helpers';

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

export async function GET(req: Request) {
  try {
    let clerkId: string | undefined;

    const bearer = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '').trim();
    if (bearer) {
      clerkId = (await resolveClerkIdFromBearerRequest(req)) ?? undefined;
    } else {
      const clerkUser = await currentUser();
      clerkId = clerkUser?.id;
    }

    if (!clerkId) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: 'unauthorized',
          message: 'Not authenticated',
        },
        { status: 401, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const userResp = await findUserByClerkId(clerkId);

    if (
      !userResp.success ||
      !userResp.result ||
      typeof userResp.result !== 'object' ||
      !('id' in userResp.result)
    ) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: userResp.error ?? 'user_not_found',
          message: userResp.message ?? 'User not found',
        },
        { status: 404, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const userId = (userResp.result as { id: string }).id;

    const serviceResp = await fetchAllAssets(userId);

    const response: ApiResponse = {
      success: serviceResp.success,
      result: serviceResp.result,
      error: serviceResp.error,
      message: serviceResp.message,
    };

    const status = serviceResp.success ? 200 : 500;
    return NextResponse.json(response, { status, headers: EXTENSION_CORS_HEADERS });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: 'api_error',
        message: err instanceof Error ? err.message : 'Failed to fetch assets',
      },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}
