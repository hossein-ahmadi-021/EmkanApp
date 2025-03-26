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
        dimPrimary: "#F1F2ED",
        disablePrimary: "#D3D8D2",
        "glass-white": "#FDFBF533",
      },
      fontSize: {
        tiny: "0.625rem",
        xBase: "1.0625rem",
        "1-5xl": "1.375rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
