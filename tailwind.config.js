/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif']
      },
      maxWidth: {
        'container': '1144px',
      },
      colors: {
        'primary': '#F40404',
        'secondary': '#6C6C6C',
        'white': '#FFFFFF',
        'overlay': 'rgba(0,0,0,0.60)',
        'overlay2': '#F40404',
        'background': 'rgba(255, 255, 255, 0.50);',
      },
      backgroundImage: {
        'serviceone': "url('/service1.png')",
        'servicetwo': "url('/service2.png')",
        'servicethree': "url('/service3.png')",
        'blogone': "url('/blog1.png')",
        'blogtwo': "url('/blog2.png')",
        'blogthree': "url('/blog3.png')",
        'aboutPic': "url('/aboutPic.png')",
        'banner': "url('/banner.png')",
      }
    },
  },
  plugins: [],
}
