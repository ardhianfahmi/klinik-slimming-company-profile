/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx}",      // for app dir pages
  "./pages/**/*.{js,ts,jsx,tsx}",    // optional if you still have pages/
  "./components/**/*.{js,ts,jsx,tsx}" // components folder
],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [daisyui],
};

export default config;
