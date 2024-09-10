/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "darkblue": "#033F63",
        "lightblue": "#28666E",
        "darkolive": "#7C9885",
        "lightolive": "#B5B682",
        "yellow": "#FEDC97",
      },
      fontFamily: {
        title: ["Alice", "serif"],
        text: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
}

