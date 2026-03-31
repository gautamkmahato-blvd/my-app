import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import generateUuid from '@/lib/utils/generateUuid';
import { ServiceResponse } from '@/types/ServiceResponse';
import { CreateUserInput } from '../types';



export default async function createOrUpdateUser(
  input: CreateUserInput
): Promise<ServiceResponse<any>> {
  if (!input || typeof input.clerk_id !== 'string' || input.clerk_id.trim() === '') {
    return {
      success: false,
      result: {},
      error: 'clerk_id is required',
    };
  }

  try {
    // Check if user already exists by clerk_id
    const { data: existing, error: lookupError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('clerk_id', input.clerk_id)
      .maybeSingle();

    if (lookupError) {
      console.error('createOrUpdateUser lookup error:', lookupError);
      return {
        success: false,
        result: {},
        error: lookupError.message || 'Failed to look up user',
      };
    }

    let userRow: any;
    let userError: any;

    if (existing) {
      // Update existing row — never touch id or created_at
      const { data, error } = await supabaseAdmin
        .from('users')
        .update({
          name: input.name ?? null,
          username: input.username ?? null,
          email: input.email ?? null,
          image: input.image ?? null,
        })
        .eq('clerk_id', input.clerk_id)
        .select()
        .single();
      userRow = data;
      userError = error;
    } else {
      // Insert new row with a generated id
      const { data, error } = await supabaseAdmin
        .from('users')
        .insert({
          id: generateUuid(),
          clerk_id: input.clerk_id,
          name: input.name ?? null,
          username: input.username ?? null,
          email: input.email ?? null,
          image: input.image ?? null,
          created_at: new Date().toISOString(),
        })
        .select()
        .single();
      userRow = data;
      userError = error;

      // 23505 = unique_violation: a stale row (different clerk_id, same username/email)
      // exists from a previous account. Re-link it to the current clerk_id.
      if (userError?.code === '23505') {
        const username = input.username ?? null;
        const email = input.email ?? null;

        let staleQuery = supabaseAdmin.from('users').select('id');
        if (username) {
          staleQuery = staleQuery.eq('username', username) as typeof staleQuery;
        } else if (email) {
          staleQuery = staleQuery.eq('email', email) as typeof staleQuery;
        } else {
          return {
            success: false,
            result: {},
            error: userError.message || 'Duplicate user and no fallback key',
          };
        }

        const { data: stale } = await staleQuery.maybeSingle();
        if (stale) {
          const { data: relinked, error: relinkError } = await supabaseAdmin
            .from('users')
            .update({
              clerk_id: input.clerk_id,
              name: input.name ?? null,
              email: input.email ?? null,
              image: input.image ?? null,
            })
            .eq('id', (stale as { id: string }).id)
            .select()
            .single();
          userRow = relinked;
          userError = relinkError;
        }
      }
    }

    if (userError) {
      console.error('createOrUpdateUser write error:', userError);
      return {
        success: false,
        result: {},
        error: userError.message || 'Failed to save user',
      };
    }

    if (!userRow || !userRow.id) {
      return {
        success: false,
        result: {},
        error: 'Operation returned no user row',
      };
    }

    return {
      success: true,
      result: userRow,
      message: 'User created or updated successfully',
    };
  } catch (err: any) {
    console.error('createOrUpdateUser error:', err);
    return {
      success: false,
      result: {},
      error: err.message || 'Unexpected server error',
    };
  }
}
