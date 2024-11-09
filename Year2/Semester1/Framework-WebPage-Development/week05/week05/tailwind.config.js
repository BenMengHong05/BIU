/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
     './public/**/*.{html,js}',
  './src/**/*.{html,js,jsx,ts,tsx}',
  flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
     // ...
     flowbite.plugin(),
  ],
}

