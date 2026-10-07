import type { Config } from "tailwindcss";

// I define a cool slate/indigo system so the brand reads as product software
// rather than a marketing brochure site.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f6fb",
          100: "#e8ecf6",
          200: "#cdd6ea",
          300: "#a7b6d8",
          400: "#7a91c2",
          500: "#5a73ab",
          600: "#465a8f",
          700: "#3a4a75",
          800: "#334061",
          900: "#2d3752",
          950: "#1a1f30",
        },
        signal: {
          50: "#eef8ff",
          100: "#d9efff",
          200: "#bce4ff",
          300: "#8ed4ff",
          400: "#59baff",
          500: "#3399ff",
          600: "#1a7af5",
          700: "#1363e1",
          800: "#1650b6",
          900: "#18458f",
          950: "#142b57",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
