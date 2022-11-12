import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import auth from './auth'
import router from './router'
import Toast from "vue-toastification";
import VueGoogleMaps from '@fawmi/vue-google-maps'


// Toast css
import "vue-toastification/dist/index.css";

const app = createApp(App)
const head = createHead()

app.use(auth)
app.use(router)
app.use(head)
app.use(Toast)
app.use(VueGoogleMaps, {
  load: {
      key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      libraries: "places"
  },
})
app.mount(document.body)