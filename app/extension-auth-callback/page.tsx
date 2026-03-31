/**
 * Landing page after Clerk sign-in when using the browser extension.
 * extension-auth-bridge.js (content script) POSTs /api/extension-token and delivers the token to the extension.
 */
export default function ExtensionAuthCallbackPage() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-2 px-4 text-center text-sm text-zinc-600">
      <p className="font-medium text-zinc-800">Finishing sign-in for the extension…</p>
      <p>This tab should close automatically. You can close it if it stays open.</p>
    </div>
  );
}
