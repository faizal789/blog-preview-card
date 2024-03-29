/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "hsl(47, 88%, 63%)",
        "white-neutral": "hsl(0, 0%, 100%)",
        "grey-neutral": "hsl(0, 0%, 50%)",
        "black-neutral": "hsl(0, 0%, 7%)",
      },
    },
    fontFamily:{
      'sans':['Figtree', 'sans-serif']
    }
  },
  plugins: [],
};
