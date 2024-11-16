import { useLocalStorage } from '@/composables/useLocaleStorage';
import { tryCatch } from '@/utils/tryCatch';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface ApiResponse<T> {
  data: T | null;
  error: any | null;
}

interface RequestOptions extends RequestInit {
  baseURL?: string;
}

const defaultParams = (): RequestOptions => {
  const token = useLocalStorage('token');

  return {
    baseURL: useRuntimeConfig().appUrlServer,
    headers: {
      'Content-Type': 'application/json',
      ...(token.value && { Authorization: `Bearer ${token.value}` }),
    },
  };
};

const onError = async <T>(error: any): Promise<ApiResponse<T>> => {
  if (error.statusCode === 401) {
    return { data: null, error };
  }

  return { data: null, error };
};

export const useApi = async <T>(
  method: TMethod,
  endpoint: string,
  options: RequestOptions = {},
): Promise<ApiResponse<T>> => {
  const defaultOptions = defaultParams();
  const mergedOptions: RequestOptions = {
    ...defaultOptions,
    ...options,
    method,
    ...(options.body ? { body: JSON.stringify(options.body) } : {}),
  };

  const url = `${mergedOptions.baseURL}${endpoint}`;

  const { data, error } = await tryCatch(fetch<T>(url, mergedOptions));

  if (error) {
    return onError<T>(error);
  }

  return { data, error };
};
