/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
  
}



// module.exports = {
//   content: [
//       'node_modules/preline/dist/*.js',
//   ],
//   plugins: [
//       require('preline/plugin'),
//   ],
// }
