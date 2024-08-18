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
