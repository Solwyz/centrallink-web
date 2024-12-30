/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add paths to your project files
  ],
  theme: {
    extend: {
      fontFamily: {
        milchella: ['Milchella', 'sans-serif'],
       nunito:['Nunito', 'sans-serif' ] 
      },
    },
  },
  plugins: [],
};
