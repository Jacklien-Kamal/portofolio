/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: { DEFAULT: "2rem" },
     
      },
      fontFamily: {
        'myFont': ["Handlee", "cursive"],
  
      },
      
      boxShadow: {
        'custom-light': '4px 4px 10px 4px rgba(100, 255, 255, 0.1), 5px 1px 7px 2px rgba(100, 200, 100, 0.2)',
        'more-custom-light': '4px 4px 10px 14px rgba(255, 255, 255, 0.1), 5px 1px 7px 2px rgba(100, 200, 100, 0.2)',
      },
      
      colors: {
            'primary': '#13adc7',
            'secondary': '#6978d1',
            'accent': '#945dd6',
            'background': '#0f1624',
            'text-main': '#fff',
            'text-secondary': '#929eb0',
            'gradient':'bg-gradient-to-r from-purple-500 to-cyan-500  '
          },
        
          backgroundImage: {
            'gradient': 'linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%)',
            'gradient-hover': 'linear-gradient(270deg, #31cbe5 0%, #8796ef 66.67%, #b27bf4 100%)',
          },
      
    },
  },
  plugins: [],
};
