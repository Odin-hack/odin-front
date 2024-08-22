module.exports = {
  presets: [
    [
      'react-app',
      {
        targets: '> 0.25%, not dead', // Целимся на широкий спектр браузеров
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-private-methods'],
};
