/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bkg: 'rgb(var(--color-bkg) / <alpha-value>)',
				content: 'rgb(var(--color-text) / <alpha-value>)'
			}
		}
	},
	plugins: [require('tailwindcss-bg-patterns')]
};
