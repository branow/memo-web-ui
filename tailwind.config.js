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
        'orangy-yellow': '#dbbb2c',
        'tealish-blue': '#525E74',
        'antiquewhite': '#faebd7',
        'dark-grey': '#333',
        'glassy-grey': 'rgba(0, 0, 0, 0.6)',
        'regent-grey': '#888D96',
        'dim-grey': '#616774',
        'charcoal': '#3B4455',


        'soft-red': 'rgba(245, 42, 0, 0.3)',
        'bold-red': 'rgba(245, 42, 0, 0.7)',
        'glassy-green': 'rgba(48, 255, 116, 0.1)',
        'soft-green': 'rgba(48, 255, 116, 0.2)',
        'bold-green': 'rgba(48, 255, 116, 0.5)',
        'soft-yellow': 'rgb(255, 190, 1, 0.6)',
        'bold-yellow': 'rgb(255, 190, 1, 0.8)',
      }
    },
  },
  plugins: [],
}
