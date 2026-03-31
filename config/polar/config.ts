import { Polar } from '@polar-sh/sdk';
import { getPolarAccessTokenForApi, isPolarSandbox } from './env';
// import { getPolarAccessTokenForApi, isPolarSandbox } from '@/lib/polar/env';

/**
 * Polar SDK client (server-only). Uses the same token + sandbox flag as REST checkout routes
 * (POLAR_SANDBOX_MODE + POLAR_SANDBOX_ACCESS_TOKEN / POLAR_ACCESS_TOKEN).
 */
function createPolarClient(): Polar | null {
  const token = getPolarAccessTokenForApi();
  if (!token || token.length === 0) return null;
  return new Polar({
    accessToken: token,
    server: isPolarSandbox() ? 'sandbox' : 'production',
  });
}

export const polar = createPolarClient();
