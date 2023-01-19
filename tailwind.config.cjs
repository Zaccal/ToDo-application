/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'full-light': 'var(--full-light)',
        'light-opacity': 'var(--light-opacity)',
        'avarage-color': 'var(--avarage-color)',
        'dark-color': 'var(--dark-color)',
        'full-dark': 'var(--full-dark)',
      },
      height: {
        'fully-vh': '100vh',
      },
      transitionDuration: {
        DEFAULT: '500ms'
      }
    },
  },
  plugins: [],
}
