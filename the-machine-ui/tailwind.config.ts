import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00BFFF',
        'zinc-950': '#0A0A0A',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'synth-gradient': 'linear-gradient(to bottom right, #000000, #1A1A1A, #2C2C2C)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
