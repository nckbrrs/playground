import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Helvetica Neue", ...fontFamily.sans]
			},
			colors: {
				black: "#212121",
				bone: "#fbf6f1"
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config;
