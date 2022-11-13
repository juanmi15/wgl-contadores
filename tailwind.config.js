/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {


      backgroundColor: theme =>({
        ...theme('colors'),
        'grad-1': '#1d71b8',
        'grad-2': '#2d2e83',
        'option-gray-1': '#9d9d9c',
        'option-gray-2': '#bcbdc0',
        'option-gray-3': '#d1d2d4',
        'option-blue-1': '#1074bc',
        'option-blue-2': '#24aae1',
        
        }),
        textColor:{
        'primary': '#9d9d9c',
        'secondary': '#d1d2d4',
        'tertiary': '#1074bc',
        },
        fontFamily:{
          Montserrat:['Montserrat', 'sans-serif']
        },
    },
  },
  plugins: [],
}