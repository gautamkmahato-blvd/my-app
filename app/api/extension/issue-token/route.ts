import { auth } from '@clerk/nextjs/server';
import { SignJWT } from 'jose';
import { createPrivateKey } from 'node:crypto';
import { NextResponse } from 'next/server';

import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';
import { getIssuer } from '@/lib/extension-jwt';

/**
 * Issues a custom RS256 JWT for the browser extension (not Clerk's session JWT).
 * POST with an active Clerk session (cookies). Used from the web app callback flow.
 */
export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const pem = process.env.EXTENSION_JWT_PRIVATE_KEY?.trim();
    const aud = process.env.EXTENSION_CHROME_ID?.trim();
    if (!pem || !aud) {
      console.error('[issue-token] Missing EXTENSION_JWT_PRIVATE_KEY or EXTENSION_CHROME_ID');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    let privateKey: ReturnType<typeof createPrivateKey>;
    try {
      privateKey = createPrivateKey(pem);
    } catch (e) {
      console.error('[issue-token] Invalid EXTENSION_JWT_PRIVATE_KEY', e);
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const { premium, creditsRemaining } = await hasPremiumAccessForClerkId(userId);
    const plan = premium ? 'paid' : 'free';
    const iss = getIssuer(request);
    const now = Math.floor(Date.now() / 1000);

    const token = await new SignJWT({
      sub: userId,
      plan,
      creditsRemaining,
    })
      .setProtectedHeader({ alg: 'RS256' })
      .setIssuer(iss)
      .setAudience(aud)
      .setIssuedAt(now)
      .setExpirationTime(now + 3600)
      .sign(privateKey);

    return NextResponse.json({ token });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Failed to issue token';
    console.error('[issue-token]', e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
