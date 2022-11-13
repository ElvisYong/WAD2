# 4 Start Michelin Frontend

Production deployment url: <https://wad-2-cookbook.vercel.app/>

## Built with
- [**Vite 3**](https://vitejs.dev/guide/)
- [**Vue 3**](https://vuejs.org/guide/introduction.html)
- [**Tailwind CSS 3**](https://tailwindcss.com/docs/configuration)
- [**Vue Router**](https://github.com/vuejs/router)
- [**@vueuse/head**](https://github.com/vueuse/head) - document head manager
- [**TypeScript**](https://vuejs.org/guide/typescript/overview.html) - write vue files as `<script setup>` or `<script setup lang="ts">`
- [**Inter var font**](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
- [**Headless UI**](https://headlessui.com/vue/menu) - unstyled UI components, designed to integrate beautifully with Tailwind CSS
- [**Heroicons**](https://github.com/tailwindlabs/heroicons) - beautiful hand-crafted SVG icons,
  by the makers of Tailwind CSS
- [**prettier-plugin-tailwindcss**](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - automatic class sorting with Prettier

First-party plugins needed for Tailwind UI:

- [**tailwindcss/forms**](https://github.com/tailwindlabs/tailwindcss-forms)
- [**tailwindcss/line-clamp**](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [**tailwindcss/typography**](https://tailwindcss.com/docs/typography-plugin)
- [**tailwindcss/aspect-ratio**](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

Unplugin Utilities:

- [**unplugin-vue-components**](https://github.com/antfu/unplugin-vue-components) - components auto importing
- [**unplugin-auto-import**](https://github.com/antfu/unplugin-auto-import) - auto import the most used APIs
- [**unplugin-vue-router**](https://github.com/posva/unplugin-vue-router) - file based routing for vue-router


## Environment file
Create a new environment file called .env in the root folder

Required environment variables
```
VITE_AUTH_DOMAIN=
VITE_AUTH_CLIENT_ID=
VITE_GOOGLE_MAPS_API_KEY=
```

## Usage
```
# install #
npm i

# run in development build #

npm run dev

# run in production build #

npm run build
npm run serve
```