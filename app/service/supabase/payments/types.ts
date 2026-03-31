export type PaymentRow = {
  id: string;
  user_id: string;
  plan_id: string | null;
  clerk_id: string | null;
  payment_provider: string;
  provider_payment_id: string;
  amount: number | null;
  currency?: string | null;
  credits_purchased: number | null;
  status: string;
  metadata: unknown;
  created_at: string;
};
