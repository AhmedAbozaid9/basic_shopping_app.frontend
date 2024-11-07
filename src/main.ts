import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'vue-toastification/dist/index.css'

import router from './router'

const app = createApp(App)

app.use(PrimeVue)

app.use(router)

app.mount('#app')
