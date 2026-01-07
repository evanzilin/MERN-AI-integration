/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          pink: '#ff6b9d',
          red: '#e63946',
          light: '#fff0f5',
        }
      },
      animation: {
          'spin-slow': 'spin 4s linear infinite',
          'gradient-xy': 'gradient-xy 3s ease infinite',
          'scale-up': 'scale-up 0.3s ease forwards',
      },
      keyframes: {
          'gradient-xy': {
              '0%, 100%': {
                  'background-size': '400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size': '200% 200%',
                  'background-position': 'right center'
              }
          },
          'scale-up': {
              '0%': { transform: 'scale(1)' },
              '100%': { transform: 'scale(1.05)' }
          }
      }
    },
  },
  plugins: [],
}

