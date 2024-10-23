// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3001
  },
  devtools: { enabled: false },
  /** 应用程序配置 */
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          "charset": "utf-8"
        }
      ],
    },
  },
  /** css 样式 */
  css: [
    'primeicons/primeicons.css',
  ],
  components:[
    { path: '~/components',pathPrefix: false},
  ],
  /** modules 模块 */
  modules: [
    '@primevue/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@nuxt/image'
  ],
  /** primevue 配置 */
  primevue: {
    importTheme: { from: '@/themes/myPrimevue.ts' },
  },
  /** motion 配置 */
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})