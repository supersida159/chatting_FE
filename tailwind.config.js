/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Text-color': "#1B1B1Bz",
      },
      backgroundColor: {
        '1b1b1b': '#1B1B1B', // Define your custom background color
        'grey-300': '#D8D8D8'
      },
    },
  },
  plugins: [],
}