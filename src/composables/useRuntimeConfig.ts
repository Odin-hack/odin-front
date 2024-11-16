type StripPrefix<S extends string, Prefix extends string = 'VITE_'> =
  S extends `${Prefix}${infer Rest}` ? Rest : S;

type CamelCase<S extends string> =
  S extends `${infer Head}_${infer Tail}`
    ? `${Lowercase<Head>}${Capitalize<CamelCase<Tail>>}`
    : Lowercase<S>;

interface ImportMetaEnv {
  VITE_GENERATE_SOURCEMAP: boolean;
  VITE_APP_URL_SERVER: string;
  VITE_APP_URL_UI: string;
  VITE_TELEGRAM_APP_URL: string;
  VITE_APP_RENDER_DEBUG_CONSOLE: number;
  VITE_GTAG_ID: string;
  VITE_SOCKET_URL: string;
}

type ExtractRuntimeConfig = {
  [K in keyof ImportMetaEnv as CamelCase<StripPrefix<K & string>>]: ImportMetaEnv[K];
};

export const useRuntimeConfig = (): ExtractRuntimeConfig => {
  const toCamelCase = (str: string): string =>
    str
      .replace(/^[A-Z]+_/, '')
      .toLowerCase()
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

  const entries = Object.entries(import.meta.env).map(([key, value]) => [
    toCamelCase(key),
    value,
  ]);

  return Object.fromEntries(entries) as ExtractRuntimeConfig;
};
