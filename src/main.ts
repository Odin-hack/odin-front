import './assets/styles/main.scss';
import { Vue3Lottie } from 'vue3-lottie';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import vue3GoogleLogin from 'vue3-google-login';

// Chart.js registration (fixes 'linear' scale error)
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976d2',
        },
      },
    },
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
});

app.mount('#app');
