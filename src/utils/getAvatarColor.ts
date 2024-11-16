export const getAvatarColor = (seed: string) => {
  const bgColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#ffc107',
    '#ff9800',
    '#ff5722',
  ];
  const seedInt = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return bgColors[seedInt % bgColors.length];
};
