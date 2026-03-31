'use client';

import { useClerk } from '@clerk/nextjs';
import { useEffect } from 'react';

/**
 * Opens from extension "Sign out" so the browser Clerk session ends (invalidates session-backed tokens).
 */
export default function SignOutPage() {
  const { signOut } = useClerk();

  useEffect(() => {
    void signOut({ redirectUrl: '/' });
  }, [signOut]);

  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4 text-sm text-zinc-600">
      Signing you out…
    </div>
  );
}
