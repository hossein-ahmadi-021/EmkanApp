module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        peyda: ["var(--font-peyda)"],
        yekan: ["var(--font-yekan)"],
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
