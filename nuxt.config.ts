// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4 // 🌟 Nuxt 4 の挙動と app/ 構造を完全有効化する設定
	},
	ssr: true,
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
