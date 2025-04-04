import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Include this if using App Router (Next.js 13+)
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/hero-bg.png')",
        "custom-bg": "url('/global-bg.svg')",
        "thevision-bg": "url('/vision-bg.png')",
        "design-bg": "url('/design-bg.png')",
        "design-bg-mob": "url('/design-bg-mob.png')",
        "understand-bg1": "url('/understanddm-image1.png')",
        "understand-bg2": "url('/understanddm-image2.png')",
        "understand-bg2-mob": "url('/understanddm-bg-mob.png')",
        "detailed-bg": "url('/detailed-bg.png')",
        "footer-bg": "url('/footer-bg.png')",
        "enrollment-bg": "url('/enrollment-bg.png')",
        "intensive-bg": "url('/intensive-bg.png')",
        "line-container-bg": "url('/line-container-bg.png')",
        "theresult-bg": "url('/theresult-bg.svg')",
        "theresult-bg2": "url('/the-result-bg.png')",
        "contact-page-bg": "url('/contact-page-vector.svg')",
        "corporate-enquiry-bg": "url('/corporate-enquiry-vector.svg')",
        "popup-bg": "url('/popup-bg.png')",
        "footer-bg-mob": "url('/footer-bg-mob.svg')",
      },
      fontFamily: {
        k2d: ["K2D", "sans-serif"],
      },
      screens: {
        xs: "376px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        moveSlightly: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" }, // Slight move
        },
        hoverEffect: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-6px)" },
        },
        stampEffect: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "30%": { transform: "scale(1.2) rotate(-10deg)" },
          "60%": { transform: "scale(0.9) rotate(5deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        slightMove: "moveSlightly 1s ease-in-out infinite",
        hoverEffect: "hoverEffect 1s ease-in-out infinite", // Hover animation
        stamp: "stampEffect 0.3s ease-in-out",
      },
      colors: {
        "bee-orange": "#F59120",
        "bee-blue": "#0241CC",
        "bee-black": "#000000",
        "bee-offwhite": "#F2F2F2",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
