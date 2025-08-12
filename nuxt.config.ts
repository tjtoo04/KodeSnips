import Lara from '@primeuix/themes/lara'
import { definePreset } from '@primeuix/themes';

const Noir = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{zinc.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{zinc.900}',
                    activeColor: '{zinc.800}'
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{zinc.50}',
                    inverseColor: '{zinc.950}',
                    hoverColor: '{zinc.100}',
                    activeColor: '{zinc.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});

export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/css/main.css', '~/assets/css/page-transition.css'],
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
        '@primevue/nuxt-module',
        '@nuxtjs/tailwindcss',
        '@sidebase/nuxt-auth',
        'nuxt-auth-utils'
    ],
    primevue: {
        options: {
            theme: {
                preset: Noir,
            }
        }

    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    auth: {
        isEnabled: true,
        globalAppMiddleware: true,
        disableServerSideAuth: false,
        originEnvKey: 'AUTH_ORIGIN',
        baseURL: 'http://localhost:3000/api/auth',
        provider: {
            type: 'authjs',
            trustHost: false,
            defaultProvider: 'github',
            addDefaultCallbackUrl: true
        },
        sessionRefresh: {
            enablePeriodically: false,
            enableOnWindowFocus: true,
        },
    }
})
