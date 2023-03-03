/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'light-gray': '#D9D9D9',
      'pastel-red': '#F67280',
      'ghost-white': '#F9F9FF',
      'spanish-gray': '#94979E',
      'eerie-black': '#1D1D1D',
      'very-light-gray': '#eeeeee',
      'black-russian': '#131315',
      'muted-lavender': '#3b599b',
      'royal-fuchsia': '#c32aa3',
      'cherenkov-radiation': '#1dcaff',
      'youtube-red': '#e52d27',
      'strong-red': '#bd081c',
      'very-dark-gray': '#2B2B2B',
    },
    extend: {
      gridTemplateColumns: {
        '5/2': '5fr 2fr'
      },
      spacing: {
        '128': '32rem',
        '150': '37.5rem',
      }
    },
  },
  plugins: [],
}
