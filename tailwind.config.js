module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // neumorphismColor: {
    //   red: {
    //     100: '#FBEBE9',
    //     200: '#F5CEC7',
    //   }
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-neumorphism')],
}
