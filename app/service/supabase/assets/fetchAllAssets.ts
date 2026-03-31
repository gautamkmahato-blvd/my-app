import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { ServiceResponse } from '@/types/ServiceResponse';
import type { AssetRow } from './types';

export async function fetchAllAssets(
  userId: string
): Promise<ServiceResponse<AssetRow[]>> {
  if (!userId || typeof userId !== 'string' || userId.trim() === '') {
    return {
      success: false,
      result: {},
      error: 'invalid_user',
      message: 'userId is required',
    };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('assets')
      .select(
        `
        id,
        user_id,
        type,
        category,
        url,
        content,
        title,
        description,
        meta,
        source_url,
        created_at
      `
      )
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('fetchAllAssets error:', error);
      return {
        success: false,
        result: {},
        error: 'db_error',
        message: 'Failed to fetch assets',
      };
    }

    return {
      success: true,
      result: (data ?? []) as AssetRow[],
      message: 'Assets fetched successfully',
    };
  } catch (err: unknown) {
    return {
      success: false,
      result: {},
      error: 'unexpected_error',
      message: err instanceof Error ? err.message : 'Unexpected error',
    };
  }
}
