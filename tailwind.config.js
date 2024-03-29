/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      backgroundImage: {
        "hero-image": "url('./src/assets/woman.jpg')",
      },
      screens: {
        xxs: "330px",
        xs: "500px",
      },
    },
  },
  plugins: [],
};
