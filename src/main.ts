import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'
import { createAuth0 } from '@auth0/auth0-vue'
import auth from './auth'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
})

app.use(auth)
app.use(router)
app.use(head)
app.mount(document.body)
