/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'get-started-background': "url('http://localhost:3000/img/get_started_section_img.png')"
      },
      colors: {
        'main-green': '#63B175',
        'main-yellow-hover': '#dbbb2c',
        'body-background-grey': '#525E74'
      }
    },
  },
  plugins: [],
}
