/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,svelte}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      display: ['Oswald Variable', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
