/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        condensed: ['Barlow Condensed', 'sans-serif'],
        sans: ['Barlow', 'sans-serif'],
      },
      fontWeight: {
        700: '700',
        800: '800',
        900: '900',
      },
      colors: {
        lime: '#c5f50a',
        dark: '#0a0a0a',
        surface: '#f5f5f0',
      },
    },
  },
  plugins: [],
};
