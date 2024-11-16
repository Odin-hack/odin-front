interface ExtendedError extends Error {
  statusCode?: number;
}

export const tryCatch = async <T, E = ExtendedError>(
  target: Promise<T> | (() => T) | (() => Promise<T>),
): Promise<{ data: T | undefined; error: E | undefined }> => {
  let data, error;

  try {
    const result = await (target instanceof Promise ? target : target().json());

    data = await result.json();
  } catch (_error) {
    error = _error as E;
  }

  return { data, error };
};
