import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from '@/plugins/vuetify'

import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(store).use(Vuetify).use(router).mount('#app')
