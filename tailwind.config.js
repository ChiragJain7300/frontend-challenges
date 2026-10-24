/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DRed: "hsl(0, 36%, 70%)",
        SRed: "hsl(0, 93%, 68%)",
        DGRed: "hsl(0, 6%, 24%)",
      },
      fontFamily: {
        josephin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
