import React from 'react'

export const useDurHook = selectT => {
  const tStr = selectT()
  const t = +new Date(tStr)
  const calcDur = () => Math.max(t - Date.now(), 0)
  const [dur, setDur] = React.useState(calcDur())
  React.useEffect(() => {
    setDur(calcDur())
    const intervalId = setInterval(() => setDur(calcDur()), 1000)
    return () => clearInterval(intervalId)
  }, [t])
  return {dur}
}

export const useThrottledFn = (callback, delay) => {
  const lastCall = React.useRef(0);
  const timeoutId = React.useRef(null);

  return React.useCallback(
    (...args) => {
      const now = Date.now();
      const remainingTime = delay - (now - lastCall.current);

      if (remainingTime <= 0) {
        lastCall.current = now;
        callback(...args);
      } else {
        if (!timeoutId.current) {
          timeoutId.current = setTimeout(() => {
            lastCall.current = Date.now();
            callback(...args);
            timeoutId.current = null;
          }, remainingTime);
        }
      }
    },
    [callback, delay]
  );
}
