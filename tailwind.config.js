/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003B95",
        secondary: "#006ce4",
        "btn-primary": "#006ce4",
        red: "#DC2626",
      subTitle: "#595959",
      title: "#1A1A1A"
      },
        fontFamily: {
          custom: ['"Blue Sans"', 'BlinkMacSystemFont', '-apple-system', '"Segoe UI"', 'sans-serif'],
        },
    },
  },
  plugins: [],
};
