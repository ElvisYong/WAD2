import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import auth from './auth'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(auth)
app.use(router)
app.use(head)
app.mount(document.body)
