export const getPercents = (value: number = 0, max: number = 0) => (value / max) * 100 || 0;

export const formatNumberWithSpaces = (number: number = 0) => {
  if (!number) return 0;

  const formatter = new Intl.NumberFormat('fr-FR').format(number);

  return formatter.replace(/\u202F/g, ' ');
};

export const formatNumberWithSpacesAndSuffix = (num: number, digits: number) => {
  if (!num) return 0;

  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];

  const regexp = /\.?0+$/;
  const item = lookup.reverse().find(item => num >= item.value);

  return item
    ? (num / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol)
    : '0';
};

export const formatTimestamp = (timestamp?: number) => {
  if (!timestamp) return '...';

  const date = new Date(timestamp);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return formatter.format(date);
};
