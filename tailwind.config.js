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
      backgroundImage:{
        'BannerImg':"url('/src/Assets/Home/Banner.png')",
        'BannerImgMob':"url('/src/Assets/Home/BannerMob.png')",
        'contactBg':"url('/src/Assets/contact/ContactBg.png')",
        'contactBgMob':"url('/src/Assets/contact/contactMob.png')",

       




      },
    },
  },
  plugins: [],
};
