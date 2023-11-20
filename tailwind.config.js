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
        'main-green-light': '#82c090',
        'main-yellow-hover': '#dbbb2c',
        'body-background-grey': '#525E74',
        'form-background-grey': '#333',
        'form-link-antiquewhite': '#faebd7',
        'form-background-darkened': 'rgba(0, 0, 0, 0.6)',
        'collection-grey': '#394151',
        'collection-underline-grey': '#888D96'
      }
    },
  },
  plugins: [],
}
