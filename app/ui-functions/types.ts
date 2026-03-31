export type UiFunctionResponse<T> = {
  success: boolean;
  result: T | Record<string, never>;
  error?: string;
  message?: string;
};
