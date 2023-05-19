/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  plugins: [],
    theme: {
      extend: {
        colors: {
          primary: {"50":"#eaebef", "100":"#091b2a" ,"200":"#00a2e7" }
        }
        
      },
      fontFamily: {
         oswald: ['Oswald'],
         arwo: ['Arwo'],
         cormorant: ['Cormorant'],
         fredoka:['Fredoka One'],
         bogart: ['Bogart']

      }
    }
}