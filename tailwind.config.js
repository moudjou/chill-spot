/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#070172',
          yellow: '#fff700',
        },
        cyber: {
          black: '#0a0a0f',
          darker: '#121219',
          dark: '#1a1a27',
          primary: '#00fff5',
          accent: '#ffff00',
        }
      },
     
    },
  },
  plugins: [],
};