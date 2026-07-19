/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2f6',
          100: '#d9e2ea',
          200: '#b8c7d6',
          300: '#93a8bd',
          400: '#6c87a0',
          500: '#4d6a86',
          600: '#37516c',
          700: '#243c57',
          800: '#162944',
          900: '#0B1D33',
          950: '#061224'
        },
        gold: {
          50: '#fbf8f1',
          100: '#f4e9d0',
          200: '#ecd9ab',
          300: '#dfc286',
          400: '#d3b26f',
          500: '#C7A96B',
          600: '#a98a4f',
          700: '#8a6d3a',
          800: '#6d5329',
          900: '#523c1c',
          950: '#3a2911'
        },
        background: '#F7F4EF',
        charcoal: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9dbde',
          300: '#b7bac0',
          400: '#8b909a',
          500: '#6b7280',
          600: '#5C6472',
          700: '#454c58',
          800: '#333944',
          900: '#2E3440',
          950: '#1c2028'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
