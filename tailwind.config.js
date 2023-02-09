/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#D4CBE5",
            a: {
              color: "#D4CBE5",
              "&:hover": {
                color: "#386FA4",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),],
};
