/**
 * @example
 * formatPxl(3350) // "3 350.00"
 */
export const formatPxl = pxl =>
  pxl.toLocaleString().replaceAll(',', ' ') +
  parseFloat(pxl).toFixed(2).slice(-3)

/**
 * @example
 * formatPxl(3350) // "3 350"
 */
export const formatPxlInt = pxl => pxl.toLocaleString().replaceAll(',', ' ')

const padInt = (x, c = 2) => ('0' + x).slice(-c)

/**
 * @example
 * formatMillis(103770) // "0:01:43"
 */
export const formatMillis = millis => {
  const secs = parseInt((millis / 1000) % 60, 10)
  const mins = parseInt((millis / 1000 / 60) % 60, 10)
  const hours = parseInt((millis / 1000 / 60 / 60) % 24, 10)
  return `${padInt(hours, 2)}:${padInt(mins)}:${padInt(secs)}`
}

/**
 * Formats int to human-readable string with K, M, G, T, P, E suffixes.
 * https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900.
 * @example
 * intToKM(299792458, 1) = 299.8M
 */
export const intToKM = (num, digits) => {
  const lookup = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'k'},
    {value: 1e6, symbol: 'M'},
    {value: 1e9, symbol: 'G'},
    {value: 1e12, symbol: 'T'},
    {value: 1e15, symbol: 'P'},
    {value: 1e18, symbol: 'E'},
  ];

  const regexp = /\.?0+$/;
  const item = lookup.reverse().find(item => num >= item.value);

  return item
    ? (num / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol)
    : '0';
}

export const race = async (p, ms = 750) => {
  const o = await Promise.all([p, new Promise(r => setTimeout(r, ms))])
  return o[0]
}

export const getAvatarColor = seed => {
  const bgColors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#ffc107",
    "#ff9800",
    "#ff5722"
  ]
  const seedInt = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

  return bgColors[seedInt % bgColors.length]
}
