import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

/**
 * Returns a Clerk session JWT for the active browser session (cookies).
 * The extension stores this and sends it as Authorization: Bearer for API calls.
 */
export async function POST() {
  try {
    const { userId, getToken } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Prefer a longer-lived session JWT for the extension (Clerk default can be ~60s).
    let token: string | null = null;
    try {
      token = await getToken({ expiresInSeconds: 3600 });
    } catch {
      // Clerk may reject custom TTL depending on instance settings
    }
    if (!token) {
      token = await getToken();
    }
    if (!token) {
      return NextResponse.json({ error: 'No session token' }, { status: 401 });
    }

    return NextResponse.json({ token });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Failed to issue token';
    console.error('[extension-token]', e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
