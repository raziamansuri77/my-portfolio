/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        secondaryBackground: "var(--secondaryBackground)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
