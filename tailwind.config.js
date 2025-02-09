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
      screens: {
        sm: '640px', // Large Mobile
        md: '768px', // Tablet
        lg: '1024px', // Desktop
        xl: '1280px', // Large Desktop
        '2xl': '1512px', // Extra Large Desktop
      },
      boxShadow: {
        card: '0px 10px 100px -30px #0F45DB',
      },
    },
  },
  plugins: [],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
