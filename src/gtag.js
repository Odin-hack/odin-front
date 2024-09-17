import ReactGA from 'react-ga4';

export const initializeGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GTAG_ID);
}
