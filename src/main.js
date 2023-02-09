import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueAnimXyz from '@animxyz/vue3';
import '@animxyz/core';

import { createApp } from 'vue';
import App from './App.vue';

import './assets/scss/main.scss';

// Importando íconos que se usarán
library.add(faPaperPlane, faGlobe);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(VueAnimXyz)
  .mount('#app');
