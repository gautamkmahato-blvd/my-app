import { SignUp } from '@clerk/nextjs';

type Props = {
  searchParams: Promise<{ redirect_url?: string }>;
};

export default async function SignUpPage({ searchParams }: Props) {
  const sp = await searchParams;
  const raw = sp.redirect_url;
  const redirect =
    typeof raw === 'string' && raw.startsWith('/') ? raw : '/extension-auth-callback';

  return (
    <div className="flex justify-center py-8">
      <SignUp forceRedirectUrl={redirect} signInFallbackRedirectUrl={redirect} />
    </div>
  );
}
