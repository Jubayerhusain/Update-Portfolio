/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-white/[0.05]': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(255,255,255)\'/%3E")',

      },
      animation: {
        'line-pulse': 'linePulse 1s ease-in-out infinite',
        'flow': 'flow 15s linear infinite alternate',
        'flow-reverse': 'flow-reverse 15s linear infinite alternate',
      },
      keyframes: {
        'flow': {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { transform: 'translate(-40%, -60%) scale(1.1)' },
        },
        'flow-reverse': {
          '0%': { transform: 'translate(50%, 0) scale(1.1)' },
          '100%': { transform: 'translate(60%, -10%) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}