/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0c0c0c',
        navy: '#000124',
        blue: '#0F45DB',
        'dark-grey': '#181818',
        'light-grey': '#adb5bd',
        white: '#f3f3f3',
      },
      sm: '640px', // Large Mobile
      md: '768px', // Tablet
      lg: '1024px', // Desktop
      xl: '1280px', // Large Desktop
    },
  },
  plugins: [],
};
