import { verifyToken } from '@clerk/backend';
import type { VerifyTokenOptions } from '@clerk/backend';

/**
 * Clerk session JWT verification for browser-extension API calls (Bearer token).
 * Uses the same tokens issued by POST /api/extension-token (auth().getToken()).
 */
export function getClerkVerifyTokenOptions(): VerifyTokenOptions {
  const secretKey = process.env.CLERK_SECRET_KEY?.trim();
  if (!secretKey) {
    throw new Error('CLERK_SECRET_KEY is required');
  }
  const opts: VerifyTokenOptions = { secretKey };
  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (appUrl) {
    try {
      opts.authorizedParties = [new URL(appUrl).origin];
    } catch {
      // ignore invalid URL
    }
  }
  return opts;
}

export async function verifyClerkSessionBearer(token: string) {
  const payload = await verifyToken(token, getClerkVerifyTokenOptions());
  const sub = typeof payload.sub === 'string' ? payload.sub : null;
  const sid = typeof payload.sid === 'string' ? payload.sid : null;
  if (!sub) {
    throw new Error('Invalid token: missing sub');
  }
  return { sub, sid, payload };
}

export async function getClerkIdFromBearerToken(token: string): Promise<string | null> {
  try {
    const { sub } = await verifyClerkSessionBearer(token);
    return sub;
  } catch {
    return null;
  }
}
