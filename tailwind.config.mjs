/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { neon: 'filter: drop-shadow(0vh 0vh 1vh rgb(244,114,182));'},
	},
	plugins: [
		require('tailwindcss-animated')
	]
}
