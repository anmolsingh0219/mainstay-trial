/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#111c3a',
          deep: '#0a1430',
          light: '#1c2b52',
        },
        ink: '#2b3244',
        accent: {
          DEFAULT: '#f07422',
          soft: '#f8954a',
        },
        cream: '#f8f5ef',
        mist: '#efece4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
