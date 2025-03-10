module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        peyda: ["var(--font-inter)"],
      },
      colors: {
        primary: "#104946",
        "glass-white": "#FDFBF533",
      },
      fontSize: {
        xBase: "17px",
        tiny: "10px",
        "1-5xl": "22px",
      },
    },
  },
  plugins: [],
};
