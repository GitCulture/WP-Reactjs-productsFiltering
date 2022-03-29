module.exports = {
	content: ["./src/**/*.{html,js}",
            "./pages/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}