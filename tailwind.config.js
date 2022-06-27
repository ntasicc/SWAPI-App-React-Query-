module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",

      md: "547px",

      lg: "780px",

      xl: "1024px",

      "2xl": "1680px",
    },
    extend: {
      animation: {
        "slide-down": "slide-down 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
