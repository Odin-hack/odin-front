interface ThrottleOptions {
  trailing?: boolean,
  leading?: boolean,
}

export function useThrottle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay: number = 1000,
  options: ThrottleOptions = {
    trailing: false,
    leading: false,
  },
) {
  const { trailing } = options;

  let lastExec = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let lastValue: Promise<void> | void;

  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }
  };

  const invoke = (...args: Args) => {
    lastExec = Date.now();
    fn(...args);
  };

  return (...args: Args) => {
    const now = Date.now();
    const elapsed = now - lastExec;

    clear();

    if (delay <= 0) return invoke(...args);

    if (elapsed > delay) invoke(...args);

    if (!trailing) return lastValue = undefined;

    lastValue = new Promise<void>((resolve) => {
      timer = setTimeout(() => {
        invoke(...args);
        clear();
        resolve();
      }, delay - elapsed);
    });

    return lastValue;
  };
}
