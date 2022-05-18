module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '670px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      height: (theme) => ({
        "screen/5": "calc(100vh / 5)",
      }),
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};