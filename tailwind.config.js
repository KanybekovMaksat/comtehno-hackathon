/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      serif: ['Unbounded', 'serif'],
      sans: ['Mulish', 'sans'],
    },
    extend: {},
    container: {
      padding: '10rem',
      center: true,
    },
  },
  plugins: [],
};
