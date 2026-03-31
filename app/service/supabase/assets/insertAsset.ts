import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { ServiceResponse } from '@/types/ServiceResponse';
import type { AssetRow, InsertAssetInput } from './types';

export async function insertAsset(
  input: InsertAssetInput
): Promise<ServiceResponse<AssetRow>> {
  if (!input || typeof input.user_id !== 'string' || input.user_id.trim() === '') {
    return {
      success: false,
      result: {},
      error: 'invalid_input',
      message: 'user_id is required',
    };
  }

  if (!input.type || typeof input.type !== 'string' || input.type.trim() === '') {
    return {
      success: false,
      result: {},
      error: 'invalid_input',
      message: 'type is required',
    };
  }

  try {
    const payload = {
      user_id: input.user_id,
      type: input.type.trim(),
      category: input.category ?? null,
      url: input.url ?? null,
      content: input.content ?? null,
      title: input.title ?? null,
      description: input.description ?? null,
      meta: input.meta ?? null,
      source_url: input.source_url ?? null,
    };

    const { data, error } = await supabaseAdmin
      .from('assets')
      .insert(payload)
      .select()
      .single();

    if (error) {
      console.error('insertAsset error:', error);
      return {
        success: false,
        result: {},
        error: 'db_error',
        message: error.message || 'Failed to insert asset',
      };
    }

    if (!data) {
      return {
        success: false,
        result: {},
        error: 'db_error',
        message: 'Insert returned no row',
      };
    }

    return {
      success: true,
      result: data as AssetRow,
      message: 'Asset created successfully',
    };
  } catch (err: unknown) {
    console.error('insertAsset unexpected error:', err);
    return {
      success: false,
      result: {},
      error: 'unexpected_error',
      message: err instanceof Error ? err.message : 'Unexpected error',
    };
  }
}
