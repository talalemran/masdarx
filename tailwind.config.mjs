/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        body: ["Tajawal", "sans-serif"],
      },
      colors: {
        charcoal: "#1A1A1A",
        white: "#FFFFFF",
        black: "#000000",
        surface: "#131313",
        card: "#1C1C1C",
        border: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
