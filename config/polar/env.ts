/**
 * Single source of truth for Polar sandbox vs production (REST + SDK).
 * Align POLAR_SANDBOX_MODE with POLAR_SANDBOX_ACCESS_TOKEN / POLAR_ACCESS_TOKEN in .env
 */
export function isPolarSandbox(): boolean {
  return process.env.POLAR_SANDBOX_MODE === 'true';
}

export function getPolarAccessTokenForApi(): string | undefined {
  return isPolarSandbox()
    ? process.env.POLAR_SANDBOX_ACCESS_TOKEN
    : process.env.POLAR_ACCESS_TOKEN;
}

export function getPolarCheckoutApiUrl(): string {
  return isPolarSandbox()
    ? 'https://sandbox-api.polar.sh/v1/checkouts'
    : 'https://api.polar.sh/v1/checkouts';
}
