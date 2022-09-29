import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'
import { createAuth0 } from '@auth0/auth0-vue'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
})

app.use(
  createAuth0({
    domain: "dev-lht06f-n.us.auth0.com",
    client_id: "PcsOUpoDB29BbDQ1WEtG8jfokpJsKYQf",
    redirect_uri: window.location.origin,
  })
)

app.use(router)
app.use(head)
app.mount(document.body)
