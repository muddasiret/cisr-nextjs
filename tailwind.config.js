module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: "#041e42",
        skyblue: "#19b5fe",
        lightyellow: "#f0f09a",
        brown: "#3e1b16",
        darkbrown: "#241d20",
        lightbrown: "#6e4d4d",
        lightdark: "#241d20",
        cream: "#c59a50",
        darkred: "#ae3321",
        orange: "#e45424",
      },
      scale: {
        103: "1.03",
      },
    },
  },
  plugins: [],
};
