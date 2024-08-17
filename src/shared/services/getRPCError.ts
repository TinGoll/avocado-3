export type RPCError = { message: string } | { error?: { message: string } };

export const getRPCError = (data: unknown): string | undefined => {
  let errorMessage;
  const dataWithError = data as RPCError;

  if (dataWithError && "message" in dataWithError) {
    errorMessage = dataWithError.message;
  }
  if (dataWithError && "error" in dataWithError) {
    errorMessage = dataWithError.error?.message;
  }

  return errorMessage;
};
