/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette inspired by Plumbing NYC / BUILDWRKS branding
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8db6ff',
          400: '#578dff',
          500: '#2f65f0',
          600: '#1a47d6',
          700: '#0b3d91', // primary deep blue (van branding)
          800: '#0a2f70',
          900: '#0d2452',
          950: '#081633',
        },
        accent: {
          50: '#fffaeb',
          100: '#fff0c6',
          200: '#ffe088',
          300: '#ffcb4a',
          400: '#f9b825', // gold accent (BUILDWRKS logo)
          500: '#f39c12',
          600: '#d97e06',
          700: '#b45d09',
          800: '#92490f',
          900: '#783c10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
