/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				hovered_primary: "inset 0px 0px 1rem 0px #58dad9, 0px 0px 1rem 0px #58dad9",
				hovered_default: "inset 0px 0px 1rem 0px transparent, 0px 0px 1rem 0px #58dad9",
			},
			backgroundColor: {
				glass: "rgba(255, 255, 255, 0.5)",
			},
			container: {
				center: true,
				padding: "2rem",
				screens: {
					lg: "1024px",
					md: "768px",
					sm: "576px",
				},
			},
		}
	},
	plugins: [],
}
