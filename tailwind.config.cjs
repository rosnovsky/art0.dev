/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
        colors: {
          rose: colors.rose,
        },
      },
  },
  plugins: [require("@tailwindcss/forms")],
};
