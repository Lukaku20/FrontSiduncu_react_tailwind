/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que las rutas sean correctas y abarquen todos tus archivos
  ],
  theme: {
    extend: {
      colors: {
        celeste: '#00CFFF',
        azulMarino: '#00264D',
        deepBlue: '#001233',
      },
    },
  },
  variants: {},
  plugins: [],
};
