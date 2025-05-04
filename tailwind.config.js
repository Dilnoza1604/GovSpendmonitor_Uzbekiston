/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f5ea',
          100: '#c1e5c9',
          200: '#99d4a6',
          300: '#6fc281',
          400: '#41af5d',
          500: '#28a745', // Main primary color
          600: '#229a3e',
          700: '#198a36',
          800: '#0f7a2e',
          900: '#055a20',
        },
        alert: {
          50: '#ffeaea',
          100: '#ffcbcb',
          200: '#f59999',
          300: '#ef6767',
          400: '#f03e3e',
          500: '#dc3545', // Main alert color
          600: '#c82333',
          700: '#bd2130',
          800: '#a71d2a',
          900: '#7a151e',
        },
        warning: {
          500: '#ffc107',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0a0a0a',
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};