// src/services/user/findUserByClerkId

import { supabaseAdmin } from "@/config/supabase/supabaseAdmin";
import { ServiceResponse } from "@/types/ServiceResponse";



/**
 * Resolve an internal user row by Clerk ID.
 * Returns ServiceResponse with result = { id, clerk_id, email } when found,
 * or result = {} when not found.
 */
export async function findUserByClerkId(
  clerkId?: string | null
): Promise<
  ServiceResponse<
    | { id: string; clerk_id: string; email?: string }
    | null
  >
> {
  if (!clerkId) {
    return {
      success: false,
      result: null,
      error: "clerkId required",
      message: "Missing clerkId",
    };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("users")
      .select("id, clerk_id, email")
      .eq("clerk_id", clerkId)
      .maybeSingle();

    if (error) {
      console.error("[userService] DB error:", error);
      return {
        success: false,
        result: null,
        error: "DB_ERROR",
        message: String(error.message || error),
      };
    }

    if (!data) {
      return {
        success: false,
        result: null,
        error: "USER_NOT_FOUND",
        message: "User not found",
      };
    }

    return {
      success: true,
      result: data,
      message: "User found",
    };
  } catch (err: any) {
    console.error("[userService] unexpected error:", err);
    return {
      success: false,
      result: null,
      error: "UNEXPECTED_ERROR",
      message: String(err?.message || err),
    };
  }
}

