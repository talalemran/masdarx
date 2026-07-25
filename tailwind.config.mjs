/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        body: ["Tajawal", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#01102f",
          50: "#f0f3f9",
          100: "#d9e1f0",
          200: "#b3c3e1",
          300: "#7a95c7",
          400: "#3d5fa3",
          500: "#01102f",
          600: "#010e29",
          700: "#000b20",
          800: "#000817",
          900: "#00050e",
        },
        accent: {
          DEFAULT: "#ffbb03",
          50: "#fff9e6",
          100: "#ffeeb3",
          200: "#ffe380",
          300: "#ffd74d",
          400: "#ffcc1a",
          500: "#ffbb03",
          600: "#e6a900",
          700: "#b38400",
          800: "#805f00",
          900: "#4d3900",
        },
        charcoal: "#1A1A1A",
        white: "#FFFFFF",
        black: "#000000",
      },
      boxShadow: {
        glow: "0 4px 24px rgba(1, 16, 47, 0.12)",
        "glow-lg": "0 8px 40px rgba(1, 16, 47, 0.18)",
        "glow-accent": "0 4px 24px rgba(255, 187, 3, 0.25)",
      },
    },
  },
  plugins: [],
};
