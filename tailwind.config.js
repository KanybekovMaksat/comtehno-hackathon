/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      serif: ['Unbounded', 'serif'],
      sans: ['Mulish', 'sans'],
    },
    extend: {
      screens: {
        'xs-max': { max: '320px' },
        'sm-max': { max: '480px' },
        'md-max': { max: '768px' },
        'lg-max': { max: '1024px' },
        'xl-max': { max: '1440px' },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '10px',
          'xs-max': '10px',
          'sm-max': '20px',
          'md-max': '50px',
          'lg-max': '100px',
          'xl-max': '10rem',
        },

        screens: {
          // 'xs-max': '400px',
          // 'sm-max': '480px', // Full width for sm-max screens
          // 'md-max': '768px', // Full width for md-max screens
          // 'lg-max': '1024px', // Specific width for lg-max screens
          'xl-max': '1440px', // Specific width for xl-max screens
        },
      },
    },
  },
  plugins: [],
}
