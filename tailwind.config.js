module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "yt-red": {
        100: "#e52117",
        200: "#d01f16",
      },
      yt: {
        200: "#e1e1e1",
        500: "#7f7f7f",
        600: "#4b4b4b",
        700: "#343434",
        800: "#232323",
        900: "#111111",
      },
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
