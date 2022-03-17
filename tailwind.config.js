module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        "vp1/4": "25vw",
      },
      minHeight: {
        "vp1/4": "25vh",
      },
      colors: {
        "color-1": "#102F42",
        "color-2": "#134053",
      },
      width: {
        "1/2": "50vw",
      },
      height: {
        "1/2": "50vh",
        "1/4": "25vh",
        colorSelector: "5vh",
      },
    },
  },
  plugins: [],
};
