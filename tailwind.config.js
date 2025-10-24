/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aperture Labs Color Palette
        'primary': '#1A434E',       // Deep Teal
        'secondary': '#F0F4F7',     // Light Gray-Blue
        'accent': '#B9F01A',        // Electric Lime
        'neutral-dark': '#242424',  // Near Black
        'neutral-light': '#FFFFFF', // Pure White
      },
      fontFamily: {
        // Defined Custom Font Stacks
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}