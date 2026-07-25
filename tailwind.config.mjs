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
        charcoal: "#1A1A1A",
        navy: "#01102f",
        accent: "#ffbb03",
        white: "#FFFFFF",
        black: "#000000",
      },
      boxShadow: {
        glow: "0 0 20px rgba(1, 16, 47, 0.15)",
        "glow-accent": "0 0 20px rgba(255, 187, 3, 0.3)",
      },
    },
  },
  plugins: [],
};
