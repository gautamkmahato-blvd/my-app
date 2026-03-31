// services/user/getUser.ts
import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { ServiceResponse } from '@/types/ServiceResponse';



function toErrorString(e: any): string {
  if (!e && e !== 0) return 'Unknown error';
  if (typeof e === 'string') return e;
  if (e?.message) return String(e.message);
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}

export async function getUser(clerkId: string): Promise<ServiceResponse<any>> {
  if (!clerkId) {
    return {
      success: false,
      result: {},
      error: 'clerkId required',
    };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('clerk_id', clerkId)
      .maybeSingle();

    if (error) {
      return {
        success: false,
        result: {},
        error: toErrorString({ message: 'Database error while fetching user', details: error }),
      };
    }

    if (!data) {
      return {
        success: false,
        result: {},
        error: 'User not found',
      };
    }

    return {
      success: true,
      result: data,
      message: 'User retrieved successfully',
    };
  } catch (err: any) {
    console.error('getUser error:', err);
    return {
      success: false,
      result: {},
      error: toErrorString(err),
    };
  }
}
