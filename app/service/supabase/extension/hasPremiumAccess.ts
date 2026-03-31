import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';

/**
 * Restricted extension UI/APIs: only while the user has a positive credit balance.
 * Past Polar payments alone do not grant access; credits must remain (> 0).
 */
export async function hasPremiumAccessForClerkId(clerkId: string): Promise<{
  premium: boolean;
  creditsRemaining: number;
}> {
  const { data: user, error } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .maybeSingle();

  if (error || !user) {
    return { premium: false, creditsRemaining: 0 };
  }

  const userId = user.id as string;

  const { data: uc, error: ucErr } = await supabaseAdmin
    .from('user_credits')
    .select('remaining_credits')
    .eq('user_id', userId)
    .maybeSingle();

  if (ucErr) {
    console.error('[hasPremiumAccess] user_credits', ucErr);
    return { premium: false, creditsRemaining: 0 };
  }

  const creditsRemaining = Math.max(0, Number(uc?.remaining_credits ?? 0));
  const premium = creditsRemaining > 0;

  return { premium, creditsRemaining };
}
