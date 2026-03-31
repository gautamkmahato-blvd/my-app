import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { insertAsset } from '@/app/service/supabase/assets/insertAsset';
import { findUserByClerkId } from '@/app/service/supabase/user/findUserByClerkId';
import type { ApiResponse } from '@/types/ApiResponse';
import type { InsertAssetInput } from '@/app/service/supabase/assets/types';
import { resolveClerkIdFromBearerRequest } from '@/lib/extension-route-helpers';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    let clerkId: string | undefined;

    const bearer = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '').trim();
    if (bearer) {
      clerkId = (await resolveClerkIdFromBearerRequest(req)) ?? undefined;
    }
    if (!clerkId) {
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
        { status: 401, headers: corsHeaders }
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
        { status: 404, headers: corsHeaders }
      );
    }

    const userId = (userResp.result as { id: string }).id;

    let body: Partial<InsertAssetInput>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: 'invalid_body',
          message: 'Invalid JSON body',
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const serviceResp = await insertAsset({
      user_id: userId,
      type: typeof body.type === 'string' ? body.type : '',
      category: body.category ?? null,
      url: body.url ?? null,
      content: body.content ?? null,
      title: body.title ?? null,
      description: body.description ?? null,
      meta: body.meta ?? null,
      source_url: body.source_url ?? null,
    });

    const response: ApiResponse = {
      success: serviceResp.success,
      result: serviceResp.result,
      error: serviceResp.error,
      message: serviceResp.message,
    };

    const status = serviceResp.success ? 201 : 400;
    return NextResponse.json(response, { status, headers: corsHeaders });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: 'api_error',
        message: err instanceof Error ? err.message : 'Failed to create asset',
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
