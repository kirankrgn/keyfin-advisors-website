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
          50: '#F3EBED',
          100: '#E9DADE',
          200: '#D7BCC3',
          300: '#C6A1AA',
          400: '#B68793',
          500: '#A76E7D',
          600: '#985667',
          700: '#8A3E51',
          800: '#7C273C',
          900: '#6E1028',
          950: '#480A1A'
        },
        gold: {
          50: '#F5EFE1',
          100: '#EDE3CA',
          200: '#DECC9F',
          300: '#D1B778',
          400: '#C4A352',
          500: '#B8902E',
          600: '#977527',
          700: '#7B5E20',
          800: '#61481A',
          900: '#473314',
          950: '#3A2911'
        },
        background: '#FCFBF8',
        champagne: '#F3EBDD',
        charcoal: {
          50: '#ECECEC',
          100: '#DDDDDD',
          200: '#C2C2C2',
          300: '#A9A9A9',
          400: '#929292',
          500: '#7B7B7B',
          600: '#656565',
          700: '#4F4F4F',
          800: '#3A3A3A',
          900: '#252525',
          950: '#181818'
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
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
