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
        'main': '#14bdeb',
      },
      height: {
        'fully-vh': '100vh',
      },
      transitionDuration: {
        DEFAULT: '500ms'
      },
      fontWeight: {
        '200': '200'
      },
      outlineWidth: {
        '1': '1px;'
      },
    },
  },
  plugins: [],
}
