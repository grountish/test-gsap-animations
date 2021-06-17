export default {
	target:'static',
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'test-gsap-animations',

		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: `
				test-gsap-animations
						`,
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap' }	  
		  ],
		
	},
	
	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: '@/plugins/vue-tippy', ssr: true },
		{ src: '@/plugins/v-click-outside', ssr: true },
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'nuxt-compress',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',

		[
			'nuxt-compress',
			{
				gzip: {
					cache: true,
				},
				brotli: {
					threshold: 10240,
				},
			},
		],
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		transpile: ['gsap']
	},

	// GSAP

	// Global page transition
	pageTransition: {
		name: 'page',
		mode: 'out-in',
		css: false,

		beforeEnter(el) {
			this.$gsap.set(el, {
				opacity: 0,
			})
		},

		enter(el, done) {
			this.$gsap.to(el, {
				opacity: 1,
				duration: 0.3,
				ease: 'power2.inOut',
				onComplete: done,
			})
		},

		leave(el, done) {
			this.$gsap.to(el, {
				opacity: 0,
				duration: 0.3,
				ease: 'power2.inOut',
				onComplete: done,
			})
		},
	},
}
