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
      },
    },
  },
  plugins: [],
};
