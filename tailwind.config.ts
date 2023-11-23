/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
export default <Partial<Config>> {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

