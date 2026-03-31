import { NextResponse } from 'next/server';
import { getClerkIdFromBearerToken } from '@/lib/extension-clerk-auth';
import { getClerkIdFromExtensionJwt } from '@/lib/extension-jwt';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';

/** CORS for browser extension calling APIs from chrome-extension:// origins */
export const EXTENSION_CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

/**
 * Bearer may be a Clerk session JWT (legacy / extension-token flow) or the custom RS256 extension JWT.
 */
export async function resolveClerkIdFromBearerRequest(req: Request): Promise<string | null> {
  const bearer = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '').trim();
  if (!bearer) return null;
  const fromClerk = await getClerkIdFromBearerToken(bearer);
  if (fromClerk) return fromClerk;
  return getClerkIdFromExtensionJwt(req, bearer);
}

export async function getClerkIdFromExtensionBearer(req: Request): Promise<string | null> {
  return resolveClerkIdFromBearerRequest(req);
}

/**
 * Restricted extension features: valid Clerk session token + remaining_credits > 0.
 */
export async function requirePremiumExtension(req: Request): Promise<
  { ok: true; clerkId: string } | { ok: false; response: NextResponse }
> {
  const clerkId = await getClerkIdFromExtensionBearer(req);
  if (!clerkId) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: EXTENSION_CORS_HEADERS }
      ),
    };
  }
  const { premium } = await hasPremiumAccessForClerkId(clerkId);
  if (!premium) {
    return {
      ok: false,
      response: NextResponse.json(
        {
          success: false,
          error: 'No credits remaining. Purchase credits to use this feature.',
          code: 'INSUFFICIENT_CREDITS',
        },
        { status: 403, headers: EXTENSION_CORS_HEADERS }
      ),
    };
  }
  return { ok: true, clerkId };
}
