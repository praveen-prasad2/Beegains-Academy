import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Include this if using App Router (Next.js 13+)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'serif'], // Replace with actual font
      },
      screens: {
        xs: "376px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "bee-orange": "#F59120",
        "bee-blue": "#0081FA",
        "bee-black": "#000000",
        "bee-offwhite": "#F2F2F2",
      },
    },
  },
  plugins: [],
} satisfies Config;
