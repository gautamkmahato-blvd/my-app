export type ServiceResponse<T> = {
    success: boolean;
    result: T | {};
    error?: string;
    message?: string;
};