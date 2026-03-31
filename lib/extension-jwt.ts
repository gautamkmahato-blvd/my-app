import { jwtVerify } from 'jose';
import { createPublicKey } from 'node:crypto';

/**
 * JWT `iss` claim — must match across issue-token, refresh-extension-token, and extension background verify.
 */
export function getIssuer(request: Request): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      /* ignore */
    }
  }
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') ?? 'http';
  if (host) {
    return `${proto}://${host}`;
  }
  return 'http://localhost:3000';
}

/**
 * `iss` values accepted when verifying extension JWTs. Minting uses {@link getIssuer} for the
 * callback request; API calls from the extension may hit the same app via `localhost` vs
 * `127.0.0.1` (different Host → different {@link getIssuer}). Include env origin, request
 * issuer, and localhost/127.0.0.1 aliases so verification matches the signed token.
 */
export function getExtensionJwtVerifyIssuers(req: Request): string[] {
  const set = new Set<string>();
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (fromEnv) {
    try {
      set.add(new URL(fromEnv).origin);
    } catch {
      /* ignore */
    }
  }
  set.add(getIssuer(req));

  const withAliases = new Set<string>(set);
  for (const origin of set) {
    try {
      const u = new URL(origin);
      if (u.hostname !== 'localhost' && u.hostname !== '127.0.0.1') continue;
      const portPart = u.port ? `:${u.port}` : '';
      const otherHost = u.hostname === 'localhost' ? '127.0.0.1' : 'localhost';
      withAliases.add(`${u.protocol}//${otherHost}${portPart}`);
    } catch {
      /* ignore */
    }
  }
  return [...withAliases];
}

/**
 * Verifies the extension's custom RS256 JWT (same rules as POST /api/refresh-extension-token).
 * Returns Clerk `sub` or null.
 */
export async function getClerkIdFromExtensionJwt(req: Request, token: string): Promise<string | null> {
  const pubPem = process.env.EXTENSION_JWT_PUBLIC_KEY?.trim();
  const aud = process.env.EXTENSION_CHROME_ID?.trim();
  if (!pubPem || !aud) return null;

  let publicKey: ReturnType<typeof createPublicKey>;
  try {
    publicKey = createPublicKey(pubPem);
  } catch {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, publicKey, {
      audience: aud,
      issuer: getExtensionJwtVerifyIssuers(req),
    });
    const sub = payload.sub;
    return typeof sub === 'string' && sub ? sub : null;
  } catch {
    return null;
  }
}
