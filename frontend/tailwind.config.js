/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkColor: "#808080",
        primaryBlue: "#525FE1",
        orangeColor: "#FFCF59",
        customBlue: "rgba(82, 95, 225, 0.16)",
      },
      backgroundImage: {
        testimonialBg: "url('/assets/testimonialBg.png')",
      },
    },
  },
  plugins: [],
};
