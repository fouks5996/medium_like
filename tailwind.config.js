/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js, jsx, ts, tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			// Colors
			yellow: "#FFBF18",
			green: "#278917",
			blueBtn: "#3C7FBF",
			// Black
			black: "#080808",
			black_light: "#191919",
			black_dark: "#292929",
			// Grey
			gray: "#757575",
			gray_light: "#E6E6E6",
			// white
			white: "rgb(255 255 255)",
		},
		fontFamily: {
			light: ["Sohne Light", "sans-serif"],
			reg: ["Sohne Regular", "sans-serif"],
			md: ["Sohne Medium", "sans-serif"],
			sbold: ["Sohne Semi-Bold", "sans-serif"],
			bold: ["Sohne Bold", "sans-serif"],
			GTsuper: ["GT super", "sans-serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
};
