/**
 * Extracts a user-friendly error message from an API error.
 * Handles 429 (AI quota), 400 (bad request), and generic errors.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getApiErrorMessage = (error: any, fallback: string): string => {
  const status = error?.response?.status;
  const serverMessage = error?.response?.data?.message;

  if (status === 429) {
    return 'AI service is temporarily unavailable due to quota limits. Please try again in a few minutes.';
  }
  if (status === 400 && serverMessage) {
    return serverMessage;
  }
  if (serverMessage) {
    return serverMessage;
  }
  return error?.message || fallback;
};
