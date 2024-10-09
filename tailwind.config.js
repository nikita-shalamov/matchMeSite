
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#FAABFF',
        'bg-color': '#6743FF',
        'icon-color': '#FAABFF',
        'slogan-color': '#ffbfff',
      },
    },
  },
  corePlugins: {
    container: false,  // полностью отключить плагин контейнера
  },
  plugins: [nextui()],
}
