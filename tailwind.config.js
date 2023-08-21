/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      desktop0: "1536",
      desktop: "1260",
      tablet: "1024",
      mobile: "768",
      SmallMobile: "620px",
    },
    extend: {
      colors: {
        aboutColor: "#f2e8e1",
      },
    },
  },
  plugins: [],
};
