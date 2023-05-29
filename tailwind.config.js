/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts,js,jsx}"],
  theme: {
    extend: {
      animation: {
        toast: "toast 0.7s",
      },
      keyframes: {
        toast: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
