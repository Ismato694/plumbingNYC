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
          '50%': { transform: 'translateY(-8px)' },
        },
        // Slow morphing background blobs for hero / banners
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        // Infinite horizontal ticker
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Sweep of light across buttons / cards
        shimmer: {
          '100%': { transform: 'translateX(200%)' },
        },
        // Animated gradient text
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Slow spin for decorative rings
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        // Subtle attention wiggle
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        // Falling water droplet
        drip: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(40px)', opacity: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        float: 'float 4s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'gradient-x': 'gradient-x 5s ease infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        wiggle: 'wiggle 0.6s ease-in-out',
        drip: 'drip 2.5s ease-in infinite',
      },
    },
  },
  plugins: [],
}
