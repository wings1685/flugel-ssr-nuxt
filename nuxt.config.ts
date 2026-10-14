// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

const mode = process.env.VITE_BUILD_MODE ?? 'ssr';
const prerenderRoutes = mode === 'ssg' ? ['/building/', '/building/list_a/', '/building/list_b/', '/building/list_c/'] : [];

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4 // 🌟 Nuxt 4 の挙動と app/ 構造を完全有効化する設定
	},
	ssr: true,
	prerender: {
		routes: prerenderRoutes
	},
	app: {
		head: {
			title: 'Nuxt SSR Test',
			meta: [
				{charset: 'utf-8'},
			],
		}
	},
	alias: {
		'#prisma': resolve(__dirname, './generated/prisma')
	}
})
