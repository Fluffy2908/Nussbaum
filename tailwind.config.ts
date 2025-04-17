// @ts-ignore
import type { Config } from 'tailwindcss'
import flowbitePlugin from 'flowbite/plugin'

const config: Config = {
  content: [
    './dist/index.html',
    './dist/app.js',
    './**/*.php',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        nussbg: '#1a1918',
      },
    },
  },
  plugins: [flowbitePlugin],
}

export default config
