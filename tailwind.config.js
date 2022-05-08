module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
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
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
