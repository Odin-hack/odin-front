import { useLocalStorage } from '@/composables/useLocaleStorage';
import { tryCatch } from '@/utils/tryCatch';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface ApiResponse<T> {
  data: T | null;
  error: any | null;
}

function toBase64Unicode(str: string): string {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

function encodeUtf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

const defaultParams = (): RequestInit => {
  const userJson = useLocalStorage('user').value;
  const user = userJson ? JSON.parse(userJson) : null;
  const raw = `${user.email}:${user.password}`;
  const base64Header = `Basic ${btoa(raw)}` 

 
  return {
    headers: {
      'x-forwarded-for': 'test',
      ...(user && { Authorization: base64Header }),
    },
  };
};

const onError = async <T>(error: any): Promise<ApiResponse<T>> => {
  if (error.statusCode === 401) {
    return { data: null, error };
  }

  return { data: null, error };
};

type RequestOptions<TBody = any> = RequestInit & (TBody extends object ? { body: TBody } : { body?: never });

export const useApi = async <T>(
  method: TMethod,
  endpoint: string,
  options?: RequestOptions,
): Promise<ApiResponse<T>> => {
  const defaultOptions = defaultParams();
  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    method,
  };

  // Add Content-Type header only if body is not FormData
  if (options?.body && !(options.body instanceof FormData)) {
    mergedOptions.headers = {
      ...mergedOptions.headers,
      'Content-Type': 'application/json',
    };
    mergedOptions.body = JSON.stringify(options.body);
  }
  const url = `${useRuntimeConfig().appUrlServer}${endpoint}`;


  const { data, error } = await tryCatch<T>(fetch(url, mergedOptions));


  if (error) {
    return onError<T>(error);
  }

  return { data, error };
};
