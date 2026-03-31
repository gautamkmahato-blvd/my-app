import { NextResponse } from 'next/server';
import { jwtVerify, SignJWT } from 'jose';
import { createPrivateKey, createPublicKey } from 'node:crypto';

import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';
import { getExtensionJwtVerifyIssuers, getIssuer } from '@/lib/extension-jwt';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

/**
 * Verifies the extension's custom RS256 JWT and issues a new one with fresh entitlements.
 * Called by the extension before expiry (no cookies on extension requests).
 */
export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    const raw = authHeader?.replace(/^Bearer\s+/i, '').trim();
    if (!raw) {
      return NextResponse.json(
        { error: 'Missing bearer token' },
        { status: 401, headers: corsHeaders }
      );
    }

    const pubPem = process.env.EXTENSION_JWT_PUBLIC_KEY?.trim();
    const privPem = process.env.EXTENSION_JWT_PRIVATE_KEY?.trim();
    const aud = process.env.EXTENSION_CHROME_ID?.trim();
    if (!pubPem || !privPem || !aud) {
      console.error(
        '[refresh-extension-token] Missing EXTENSION_JWT_PUBLIC_KEY, EXTENSION_JWT_PRIVATE_KEY, or EXTENSION_CHROME_ID'
      );
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500, headers: corsHeaders }
      );
    }

    let publicKey: ReturnType<typeof createPublicKey>;
    let privateKey: ReturnType<typeof createPrivateKey>;
    try {
      publicKey = createPublicKey(pubPem);
      privateKey = createPrivateKey(privPem);
    } catch (e) {
      console.error('[refresh-extension-token] Invalid JWT keys', e);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500, headers: corsHeaders }
      );
    }

    const iss = getIssuer(req);

    let sub: string;
    try {
      const { payload } = await jwtVerify(raw, publicKey, {
        audience: aud,
        issuer: getExtensionJwtVerifyIssuers(req),
      });
      const s = payload.sub;
      if (typeof s !== 'string' || !s) {
        return NextResponse.json(
          { error: 'Invalid token payload' },
          { status: 401, headers: corsHeaders }
        );
      }
      sub = s;
    } catch {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401, headers: corsHeaders }
      );
    }

    const { premium, creditsRemaining } = await hasPremiumAccessForClerkId(sub);
    const plan = premium ? 'paid' : 'free';
    const now = Math.floor(Date.now() / 1000);

    const token = await new SignJWT({
      sub,
      plan,
      creditsRemaining,
    })
      .setProtectedHeader({ alg: 'RS256' })
      .setIssuer(iss)
      .setAudience(aud)
      .setIssuedAt(now)
      .setExpirationTime(now + 3600)
      .sign(privateKey);

    return NextResponse.json({ token }, { headers: corsHeaders });
  } catch (e: unknown) {
    console.error('[refresh-extension-token]', e);
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 401, headers: corsHeaders }
    );
  }
}
