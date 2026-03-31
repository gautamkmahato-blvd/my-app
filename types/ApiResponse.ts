export type ApiResponse<T = any> = {
    success: boolean;
    result: T | {};
    error?: string;
    message?: string;
};