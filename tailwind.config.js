/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'navbar',
    'loading',
    'btn',
    'btn-primary',
    'bg-base-100',
  ],
  plugins: [require("daisyui")],
};
