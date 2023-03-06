/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(35, 77%, 62%)",
        primnaryRed: "hsl(5, 85%, 63%)",

        offWhite: "hsl(36, 100%, 99%)",
        grayBlue: "hsl(233, 8%, 79%)",
        darkBlue: "hsl(236, 13%, 42%)",
        darkerBlue: "hsl(240, 100%, 5%)"
      },
      fontFamily: {
        inter: ['Inter', "sans-serif"]
      },
      fontSize: {
        customSm: '15px',
      }
    },
  },
  plugins: [],
}
