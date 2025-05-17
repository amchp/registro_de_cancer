/* tailwind.config.ts */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: { /* … */ },
    extend: {
      colors: { /* … including your medical palette */ },
      borderRadius: { /* … */ },
      keyframes: { /* … */ },
      animation: { /* … */ },
    },
  },
  plugins: [],
};

export default config;

