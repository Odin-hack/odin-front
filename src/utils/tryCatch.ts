interface IError {
  message: string;
  error: string;
  statusCode: number;
  correlationId: string;
}

export const tryCatch = async <T>(
  target: Promise<Response>,
): Promise<{ data: T | null; error: IError | undefined }> => {
  let data: T | null = null;
  let error: IError | undefined = undefined;

  try {
    const result = await target;

    if (!result.ok) {
      error = await result.json();

      return { data: null, error };
    }

    data = await result.json() as T;

  } catch (_error) {
    error = _error as IError;
  }

  return { data, error };
};
