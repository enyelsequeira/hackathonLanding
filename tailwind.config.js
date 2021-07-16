module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
      sub: ["Volkhov", "serif"],
    },
    extend: {
      colors: {
        "text-gray": "#5E6282",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
